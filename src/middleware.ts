import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // Ajouter la configuration nécessaire ici
  locales: ['fr', 'en', 'it'],
  defaultLocale: 'fr',
  localePrefix: 'always',
  localeDetection: true,
});
 
export const config = {
  // Match all pathnames except for
  // - … files in the public folder
  // - /_next (Next.js internals)
  // - /_vercel (Vercel internals)
  // - /api (API routes)
  // - all root files inside /public (e.g. /favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};