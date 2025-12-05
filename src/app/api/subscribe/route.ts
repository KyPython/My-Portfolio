import { NextRequest, NextResponse } from 'next/server';

const HUBSPOT_PORTAL_ID = '243698495';
const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY; // Optional: for Contacts API

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source } = body;

    // Validate email
    if (!email || !email.trim()) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get the page URL they came from
    const referer = request.headers.get('referer') || '';
    const origin = request.headers.get('origin') || '';
    const pageUrl = referer || origin || 'Portfolio Website';
    
    // Create detailed source information
    const detailedSource = `Portfolio Website - ${source || 'Newsletter Signup'} - ${pageUrl}`;
    const leadSource = 'Portfolio Website';
    const formSource = source || 'Newsletter Signup';

    // Submit to HubSpot
    let hubspotSuccess = false;
    
    if (HUBSPOT_API_KEY) {
      // Use HubSpot Contacts API to create/update contact and add to newsletter list
      // Supports both API keys (hapikey) and Personal Access Tokens (Bearer token)
      try {
        const isPAT = HUBSPOT_API_KEY.startsWith('pat-');
        const apiUrl = isPAT
          ? `https://api.hubapi.com/contacts/v1/contact/createOrUpdate/email/${encodeURIComponent(email.trim())}`
          : `https://api.hubapi.com/contacts/v1/contact/createOrUpdate/email/${encodeURIComponent(email.trim())}?hapikey=${HUBSPOT_API_KEY}`;
        
        const hubspotResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              ...(isPAT && { 'Authorization': `Bearer ${HUBSPOT_API_KEY}` }),
            },
            body: JSON.stringify({
              properties: [
                { property: 'email', value: email.trim() },
                { property: 'source', value: detailedSource },
                { property: 'hs_lead_status', value: 'NEW' },
                { property: 'lead_source', value: leadSource },
                { property: 'form_source', value: formSource },
                { property: 'page_url', value: pageUrl },
                { property: 'newsletter_subscription', value: 'true' },
              ],
            }),
          }
        );

        if (hubspotResponse.ok) {
          hubspotSuccess = true;
        }
      } catch (hubspotError) {
        console.error('HubSpot API error:', hubspotError);
      }
    }

    // Also submit to HubSpot form endpoint if form GUID is available
    // Replace 'YOUR_FORM_GUID' with your actual HubSpot newsletter form GUID
    const formGuid = process.env.HUBSPOT_NEWSLETTER_FORM_GUID;
    
    if (formGuid) {
      try {
        const formResponse = await fetch(
          `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${formGuid}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              fields: [
                {
                  name: 'email',
                  value: email.trim(),
                },
                {
                  name: 'source',
                  value: detailedSource,
                },
              ],
              context: {
                pageUri: pageUrl,
                pageName: 'Portfolio Newsletter Signup',
                hutk: request.headers.get('cookie')?.match(/hubspotutk=([^;]+)/)?.[1] || '',
              },
            }),
          }
        );

        if (formResponse.ok) {
          hubspotSuccess = true;
        }
      } catch (formError) {
        console.error('HubSpot form submission error:', formError);
      }
    }

    // Return success even if HubSpot submission fails (graceful degradation)
    return NextResponse.json({
      success: true,
      message: 'Newsletter subscription successful',
      hubspotSubmitted: hubspotSuccess,
    });
  } catch (error) {
    console.error('Subscribe form error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

