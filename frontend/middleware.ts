// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  matcher: ['/((?!api|_next|favicon.ico|login|register).*)'],
}

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const { pathname } = request.nextUrl
  console.log('Middleware動いてる！')
  // 対象ページだけチェック（例：/dashboard以下を保護）
   if (!token &&
      !pathname.startsWith('/_next') &&
      !pathname.startsWith('/api') &&
      !['/login', '/register', '/favicon.ico'].includes(pathname)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}
