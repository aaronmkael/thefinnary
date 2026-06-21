import { NextRequest, NextResponse } from 'next/server';
import { LOCALES, DEFAULT_LOCALE } from '@/lib/seo/i18n';

const localeSet = new Set<string>(LOCALES.map((l) => l.lang));

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale.lang}/`) || pathname === `/${locale.lang}`
  );

  if (pathnameHasLocale) return;

  // Skip non-page assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.includes('.') // static files
  ) {
    return;
  }

  // Detect preferred locale from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') ?? '';
  const preferred = acceptLanguage
    .split(',')
    .map((part) => part.split(';')[0].trim().split('-')[0])
    .find((lang) => localeSet.has(lang));

  const locale = preferred ?? DEFAULT_LOCALE;

  // Redirect to locale-prefixed URL
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next|api|images|favicon.ico|robots.txt|sitemap.xml).*)'],
};
