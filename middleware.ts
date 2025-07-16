// middleware.ts
import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'mn'],       // Add your supported locales
  defaultLocale: 'en',
})

export const config = {
  matcher: [
    '/',
    '/(mn|en)/:path*',
    '/admin/:path*',
  ]
}
