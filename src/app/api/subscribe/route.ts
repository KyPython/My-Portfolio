
import { NextResponse } from "next/server";

type Body = {
  email?: string;
  firstName?: string;
  lastName?: string;
};

function validEmail(email?: string) {
  if (!email) return false;
  return /\S+@\S+\.\S+/.test(email);
}

function errorMessage(err: unknown): string {
  if (typeof err === "object" && err !== null && "message" in err) {
    const m = (err as { message?: unknown }).message;
    if (typeof m === "string") return m;
  }
  return String(err ?? "unknown error");
}

const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID;
const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;
const ZOHO_REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN;
const ZOHO_REGION = (process.env.ZOHO_REGION || "com").toLowerCase(); // com, eu, in, cn

const ACCOUNTS_HOST = ZOHO_REGION === "eu" ? "https://accounts.zoho.eu" : ZOHO_REGION === "in" ? "https://accounts.zoho.in" : ZOHO_REGION === "cn" ? "https://accounts.zoho.com.cn" : "https://accounts.zoho.com";
const API_HOST = ZOHO_REGION === "eu" ? "https://www.zohoapis.eu" : ZOHO_REGION === "in" ? "https://www.zohoapis.in" : ZOHO_REGION === "cn" ? "https://www.zohoapis.com.cn" : "https://www.zohoapis.com";

type TokenCache = { token: string; expiry: number } | null;
function getGlobalCache(): TokenCache {
  try {
    return (globalThis as any).__zoho_token_cache || null;
  } catch (e) {
    return null;
  }
}
function setGlobalCache(c: TokenCache) {
  try {
    (globalThis as any).__zoho_token_cache = c;
  } catch (e) {
    // ignore
  }
}

async function refreshAccessToken(): Promise<{ access_token: string; expires_in: number }> {
  if (!ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET || !ZOHO_REFRESH_TOKEN) {
    throw new Error("Missing ZOHO_CLIENT_ID / ZOHO_CLIENT_SECRET / ZOHO_REFRESH_TOKEN env vars");
  }

  const params = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: ZOHO_CLIENT_ID,
    client_secret: ZOHO_CLIENT_SECRET,
    refresh_token: ZOHO_REFRESH_TOKEN,
  });

  const res = await fetch(`${ACCOUNTS_HOST}/oauth/v2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Failed to refresh Zoho access token: ${res.status} ${txt}`);
  }

  const json = await res.json();
  if (!json.access_token) throw new Error(`No access_token in Zoho response: ${JSON.stringify(json)}`);
  return { access_token: json.access_token as string, expires_in: json.expires_in as number };
}

async function getAccessToken(): Promise<string> {
  const cached = getGlobalCache();
  if (cached && Date.now() < cached.expiry - 30000) return cached.token; // still valid

  const t = await refreshAccessToken();
  const expiry = Date.now() + (Number(t.expires_in || 3600) * 1000);
  setGlobalCache({ token: t.access_token, expiry });
  return t.access_token;
}

async function createZohoLead(accessToken: string, payload: { email: string; firstName?: string; lastName?: string }) {
  const last = payload.lastName || payload.email.split("@")[0] || "WebsiteLead";
  const body = {
    data: [
      {
        Company: "Website",
        Last_Name: last,
        First_Name: payload.firstName || "",
        Email: payload.email,
      },
    ],
  };

  const res = await fetch(`${API_HOST}/crm/v2/Leads`, {
    method: "POST",
    headers: { Authorization: `Zoho-oauthtoken ${accessToken}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`Zoho CRM error ${res.status}: ${JSON.stringify(json)}`);
  return json;
}

export async function POST(request: Request) {
  try {
    const ct = request.headers.get("content-type") || "";
    let body: Body = {};
    if (ct.includes("application/json")) body = (await request.json()) as Body;
    else {
      const form = await request.formData();
      body.email = (form.get("email") as string) || undefined;
      body.firstName = (form.get("firstName") as string) || undefined;
      body.lastName = (form.get("lastName") as string) || undefined;
    }

    if (!validEmail(body.email)) return NextResponse.json({ ok: false, error: "Invalid or missing email" }, { status: 400 });

    const accessToken = await getAccessToken();
    const results: Record<string, unknown> = {};

    try {
      const crm = await createZohoLead(accessToken, { email: body.email!, firstName: body.firstName, lastName: body.lastName });
      results.zoho = { ok: true, data: crm };
    } catch (err: unknown) {
      results.zoho = { ok: false, error: errorMessage(err) };
    }

    // Optional Campaigns forward
    const CAMPAIGNS_URL = process.env.ZOHO_CAMPAIGNS_API_URL;
    const CAMPAIGNS_KEY = process.env.ZOHO_CAMPAIGNS_API_KEY;
    if (CAMPAIGNS_URL) {
      try {
        const resp = await fetch(CAMPAIGNS_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json", ...(CAMPAIGNS_KEY ? { Authorization: `Bearer ${CAMPAIGNS_KEY}` } : {}) },
          body: JSON.stringify({ email: body.email, firstName: body.firstName, lastName: body.lastName }),
        });
        results.campaigns = { status: resp.status, body: await resp.json().catch(() => ({})) };
      } catch (err: unknown) {
        results.campaigns = { ok: false, error: errorMessage(err) };
      }
    } else {
      results.campaigns = { skipped: true };
    }

    return NextResponse.json({ ok: true, results });
  } catch (err: unknown) {
    return NextResponse.json({ ok: false, error: errorMessage(err) }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, message: "POST to this route with { email } to create a Zoho Lead" });
}
