import { NextRequest, NextResponse } from 'next/server';

const HUBSPOT_PORTAL_ID = '243698495';
const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY; // Optional: for Forms API

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, source } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get the page URL they came from
    const referer = request.headers.get('referer') || '';
    const origin = request.headers.get('origin') || '';
    const pageUrl = referer || origin || 'Portfolio Website';
    
    // Create detailed source information
    const detailedSource = `Portfolio Website - ${source || 'Contact Form'} - ${pageUrl}`;
    const leadSource = 'Portfolio Website';
    const formSource = source || 'Contact Form';

    // Submit to HubSpot using Forms API
    // If you have a HubSpot form GUID, replace 'FORM_GUID' with your actual form GUID
    // You can find this in HubSpot: Marketing > Lead Capture > Forms
    const hubspotFormData = {
      fields: [
        {
          name: 'firstname',
          value: name.split(' ')[0] || name,
        },
        {
          name: 'lastname',
          value: name.split(' ').slice(1).join(' ') || '',
        },
        {
          name: 'email',
          value: email.trim(),
        },
        {
          name: 'message',
          value: message.trim(),
        },
        {
          name: 'subject',
          value: subject || 'Contact Form Submission',
        },
        {
          name: 'source',
          value: detailedSource,
        },
        {
          name: 'hs_lead_status',
          value: 'NEW',
        },
      ],
      context: {
        pageUri: pageUrl,
        pageName: 'Portfolio Contact Form',
        hutk: request.headers.get('cookie')?.match(/hubspotutk=([^;]+)/)?.[1] || '',
      },
    };

    // Try to submit to HubSpot Forms API
    // Method 1: Using form submission endpoint (works without API key for public forms)
    // You'll need to create a form in HubSpot and get its GUID
    // For now, we'll use the Contacts API if API key is available
    
    let hubspotSuccess = false;
    
    if (HUBSPOT_API_KEY) {
      // Use HubSpot Contacts API to create/update contact
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
                { property: 'firstname', value: name.split(' ')[0] || name },
                { property: 'lastname', value: name.split(' ').slice(1).join(' ') || '' },
                { property: 'email', value: email.trim() },
                { property: 'message', value: message.trim() },
                { property: 'subject', value: subject || 'Contact Form Submission' },
                { property: 'source', value: detailedSource },
                { property: 'hs_lead_status', value: 'NEW' },
                { property: 'lead_source', value: leadSource },
                { property: 'form_source', value: formSource },
                { property: 'page_url', value: pageUrl },
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

    // Also submit to HubSpot form endpoint (works for public forms)
    // Replace 'YOUR_FORM_GUID' with your actual HubSpot form GUID
    // You can find this in HubSpot: Marketing > Lead Capture > Forms > [Your Form] > Options > Form ID
    const formGuid = process.env.HUBSPOT_CONTACT_FORM_GUID;
    
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
              fields: hubspotFormData.fields,
              context: hubspotFormData.context,
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
    // The HubSpot tracking script will still track the page view
    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      hubspotSubmitted: hubspotSuccess,
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

