// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const origin = req.headers.get('origin') || '*';

  const res = NextResponse.next();

  const corsHeaders = {
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET,HEAD,POST,PUT,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Headers':
      'Content-Type,Authorization,X-Requested-With,Accept,Origin',
  };

  // Nếu là preflight request
  if (req.method === 'OPTIONS') {
    const preflightHeaders = {
      ...corsHeaders,
      'Access-Control-Max-Age': '86400',
    };

    return new NextResponse(null, {
      status: 204,
      headers: preflightHeaders,
    });
  }

  // Thêm CORS headers cho các request khác
  Object.entries(corsHeaders).forEach(([key, value]) => {
    res.headers.set(key, value);
  });

  return res;
}

// Áp dụng cho tất cả API routes
export const config = {
  matcher: '/api/:path*',
};
