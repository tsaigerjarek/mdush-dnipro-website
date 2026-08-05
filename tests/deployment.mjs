import { access, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { readdir } from 'node:fs/promises';

const distRoot = 'dist';
const basePath = '/mdush-dnipro-website';
const siteOrigin = 'https://tsaigerjarek.github.io';
const htmlFiles = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (entry.name.endsWith('.html')) htmlFiles.push(path);
  }
}

await walk(distRoot);
await access(join(distRoot, 'sitemap.xml'));

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const route = `/${relative(distRoot, file).replaceAll('\\', '/').replace(/index\.html$/, '')}`;
  const canonical = `${siteOrigin}${basePath}${route}`;

  if (!html.includes(`<link rel="canonical" href="${canonical}">`)) {
    throw new Error(`Маршрут ${route} не має production canonical URL`);
  }

  for (const match of html.matchAll(/(?:href|src)="(\/[^"]+)"/g)) {
    const url = match[1];
    if (!url.startsWith(`${basePath}/`)) {
      throw new Error(`Маршрут ${route} містить URL поза base path: ${url}`);
    }
  }
}

const sitemap = await readFile(join(distRoot, 'sitemap.xml'), 'utf8');
for (const route of ['/', '/pro-zaklad/', '/sportyvni-napriamy/', '/yak-vstupyty/', '/prozorist/', '/novyny/', '/kontakty/']) {
  if (!sitemap.includes(`<loc>${siteOrigin}${basePath}${route}</loc>`)) {
    throw new Error(`Карта сайту не містить маршрут ${route}`);
  }
}

const robots = await readFile(join(distRoot, 'robots.txt'), 'utf8');
if (!robots.includes(`Sitemap: ${siteOrigin}${basePath}/sitemap.xml`)) {
  throw new Error('robots.txt не містить production URL карти сайту');
}

console.log(`Перевірено розгортання: ${htmlFiles.length} сторінок, base path, canonical URL, robots і sitemap`);
