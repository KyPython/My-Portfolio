import { NextRequest, NextResponse } from 'next/server';

export async function POST() {
  try {
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
    
    return NextResponse.json({ 
      access_token: data.access_token,
      expires_in: data.expires_in 
    });
  } catch (error) {
    console.error('Zoho authentication error:', error);
    return NextResponse.json(
      { error: 'Failed to authenticate with Zoho' },
      { status: 500 }
    );
  }
}