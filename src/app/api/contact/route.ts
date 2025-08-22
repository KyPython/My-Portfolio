import { NextRequest, NextResponse } from 'next/server';

interface ZohoContact {
  Email: string;
  Lead_Source: string;
  Company?: string;
  First_Name?: string;
  Last_Name?: string;
  Description?: string;
  Phone?: string;
}

async function getZohoAccessToken(): Promise<string> {
  const response = await fetch('https://accounts.zoho.com/oauth/v2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
      client_id: process.env.ZOHO_CLIENT_ID!,
      client_secret: process.env.ZOHO_CLIENT_SECRET!,
      grant_type: 'refresh_token',
    }),
  });

  if (!response.ok) {
    throw new Error(`Zoho auth failed: ${response.statusText}`);
  }

  const data = await response.json();
  return data.access_token;
}

async function createZohoLead(contactData: ZohoContact, accessToken: string) {
  const response = await fetch('https://www.zohoapis.com/crm/v2/Leads', {
    method: 'POST',
    headers: {
      'Authorization': `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: [contactData]
    }),
  });

  if (!response.ok) {
    throw new Error(`Zoho CRM API failed: ${response.statusText}`);
  }

  return response.json();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, company, message, phone, subject = 'Website Contact Form' } = body;

    if (!email || !name || !message) {
      return NextResponse.json(
        { error: 'Email, name, and message are required' },
        { status: 400 }
      );
    }

    // Get fresh access token
    const accessToken = await getZohoAccessToken();

    // Parse name
    const nameParts = name.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Prepare contact data for Zoho
    const contactData: ZohoContact = {
      Email: email,
      Lead_Source: 'Portfolio Website - Contact Form',
      First_Name: firstName,
      Last_Name: lastName,
      Company: company || 'Not Provided',
      Phone: phone || '',
      Description: `🌐 PORTFOLIO WEBSITE LEAD\n\nSubject: ${subject}\n\nMessage: ${message}\n\nSource: kyjahnsmith.com contact form\nSubmitted: ${new Date().toLocaleString()}`,
    };

    // Create lead in Zoho CRM
    const result = await createZohoLead(contactData, accessToken);

    // Also trigger Zapier webhook if available
    if (process.env.ZAPIER_WEBHOOK_URL) {
      try {
        await fetch(process.env.ZAPIER_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            name,
            company,
            message,
            phone,
            subject,
            source: 'Portfolio Website - Contact Form',
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (zapierError) {
        console.error('Zapier webhook failed:', zapierError);
        // Don't fail the main request if Zapier fails
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully and added to CRM',
      zohoResult: result,
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send message',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}