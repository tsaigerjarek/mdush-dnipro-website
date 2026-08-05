import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { withBase } from '../lib/urls';

const staticRoutes = [
  '/',
  '/pro-zaklad/',
  '/sportyvni-napriamy/',
  '/yak-vstupyty/',
  '/prozorist/',
  '/novyny/',
  '/kontakty/',
];

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    return new Response('Astro site URL is not configured.', { status: 500 });
  }

  const news = await getCollection('news', ({ data }) => data.status === 'published');
  const routes = [...staticRoutes, ...news.map((entry) => `/novyny/${entry.id}/`)];
  const urls = routes
    .map((route) => `  <url><loc>${new URL(withBase(route), site).href}</loc></url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
