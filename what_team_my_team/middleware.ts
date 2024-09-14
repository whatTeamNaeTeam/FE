import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const response = NextResponse.next()

  const path = req.nextUrl.pathname

  const isProtectedRoute =
    path === '/' ? false : protectedRoutes.some((route) => path.includes(route))
  const isAuthRoute =
    path === '/' ? false : authRoutes.some((route) => path.includes(route))

  const isAuthenticated = req.cookies.get('access')?.value ? true : false

  if (isAuthRoute && isAuthenticated) {
    const homeURL = new URL('', req.nextUrl.origin)
    return NextResponse.redirect(homeURL.toString())
  }

  if (isProtectedRoute && !isAuthenticated) {
    const signinURL = new URL(SIGN_IN_PATH, req.nextUrl.origin)
    return NextResponse.redirect(signinURL.toString())
  }

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}

const SIGN_IN_PATH = '/signin'
const SIGN_UP_PATH = '/signup'
const AUTH_PATH = '/oauth'

const authRoutes = [SIGN_IN_PATH, SIGN_UP_PATH, AUTH_PATH]
const protectedRoutes = ['/setting', '/manage', '/teamAdd', '/teamManage']
