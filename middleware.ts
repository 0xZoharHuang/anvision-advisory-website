import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed', // Don't prefix default locale
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(zh-CN|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
