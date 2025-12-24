import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    // Redirect to GitHub OAuth
    const clientId = process.env.GITHUB_CLIENT_ID;
    const redirectUri = `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/callback`;
    
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo`;
    
    return NextResponse.redirect(githubAuthUrl);
  }

  return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
}
