import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 });
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      return NextResponse.json({ error: tokenData.error_description }, { status: 400 });
    }

    // Return HTML that posts the token to the CMS
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Authenticating...</title>
        </head>
        <body>
          <script>
            (function() {
              const token = "${tokenData.access_token}";
              const provider = "github";
              
              if (window.opener) {
                window.opener.postMessage(
                  'authorization:' + provider + ':success:' + JSON.stringify({ token, provider }),
                  window.location.origin
                );
                window.close();
              }
            })();
          </script>
          <p>Authenticating... You can close this window if it doesn't close automatically.</p>
        </body>
      </html>
    `;

    return new NextResponse(html, {
      headers: { 'Content-Type': 'text/html' },
    });
  } catch (error) {
    console.error('OAuth error:', error);
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}
