import { access, readdir, readFile } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';

const distRoot = 'dist';
const basePath = '/mdush-dnipro-website';
const expectedHtmlPages = 15;
const htmlFiles = [];
const javascriptFiles = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await walk(path);
    } else if (extname(entry.name) === '.html') {
      htmlFiles.push(path);
    } else if (extname(entry.name) === '.js') {
      javascriptFiles.push(path);
    }
  }
}

await walk(distRoot);
await access(join(distRoot, 'robots.txt'));

if (htmlFiles.length !== expectedHtmlPages) {
  throw new Error(`Очікувалося ${expectedHtmlPages} HTML-сторінок, отримано ${htmlFiles.length}`);
}

if (javascriptFiles.length > 0) {
  throw new Error(`Знайдено клієнтські JavaScript-файли: ${javascriptFiles.join(', ')}`);
}

const publicRoutes = new Set(
  htmlFiles.map((file) => {
    const path = relative(distRoot, file).replaceAll('\\', '/').replace(/index\.html$/, '');
    return `/${path}`;
  }),
);
const titles = new Set();

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const route = `/${relative(distRoot, file).replaceAll('\\', '/').replace(/index\.html$/, '')}`;
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1]?.trim();
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1]?.trim();
  const h1Count = (html.match(/<h1(?:\s|>)/g) ?? []).length;

  if (!title || titles.has(title)) {
    throw new Error(`Маршрут ${route} не має унікального title`);
  }
  titles.add(title);

  if (!description || description.length < 30) {
    throw new Error(`Маршрут ${route} не має достатнього meta description`);
  }
  if (h1Count !== 1) {
    throw new Error(`Маршрут ${route} має ${h1Count} заголовків h1 замість одного`);
  }
  if (!html.includes('name="viewport" content="width=device-width, initial-scale=1"')) {
    throw new Error(`Маршрут ${route} не має коректного viewport`);
  }
  if (!html.includes('class="skip-link" href="#main-content"')) {
    throw new Error(`Маршрут ${route} не має посилання пропуску навігації`);
  }
  for (const property of ['og:locale', 'og:site_name', 'og:type', 'og:title', 'og:description']) {
    if (!html.includes(`property="${property}"`)) {
      throw new Error(`Маршрут ${route} не має метаданих ${property}`);
    }
  }

  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  if (new Set(ids).size !== ids.length) {
    throw new Error(`Маршрут ${route} має повторювані id`);
  }

  for (const image of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\salt="[^"]*"/.test(image[0]) || !/\swidth="\d+"/.test(image[0]) || !/\sheight="\d+"/.test(image[0])) {
      throw new Error(`Маршрут ${route} має зображення без alt або розмірів`);
    }
  }

  for (const match of html.matchAll(/\shref="([^"]+)"/g)) {
    const href = match[1];
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const target = href.split('#')[0].replace(new RegExp(`^${basePath}`), '') || '/';
    if (target && !publicRoutes.has(target) && !target.includes('.')) {
      throw new Error(`Маршрут ${route} містить неробоче внутрішнє посилання ${href}`);
    }
  }

  if (/Каркас службової сторінки|TODO/.test(html)) {
    throw new Error(`Маршрут ${route} містить технічну заглушку`);
  }

  const isPendingLegalPage = route === '/polityka-pryvatnosti/' || route === '/pravyla-vykorystannia/';
  const expectedRobots = isPendingLegalPage ? 'noindex, nofollow' : 'index, follow';
  if (!html.includes(`name="robots" content="${expectedRobots}"`)) {
    throw new Error(`Маршрут ${route} має некоректну директиву robots`);
  }
}

const contrastPairs = [
  ['#101713', '#f4f6f2', 4.5, 'основний текст'],
  ['#526159', '#f4f6f2', 4.5, 'другорядний текст'],
  ['#ffffff', '#126149', 4.5, 'кнопка'],
  ['#c9ded5', '#062d22', 4.5, 'текст hero'],
  ['#ffd54f', '#062d22', 3, 'контур фокусу'],
  ['#062d22', '#f4f6f2', 3, 'зовнішнє кільце фокусу'],
];

for (const [foreground, background, minimum, label] of contrastPairs) {
  const ratio = contrast(foreground, background);
  if (ratio < minimum) {
    throw new Error(`Контраст «${label}» ${ratio.toFixed(2)}:1 нижчий за ${minimum}:1`);
  }
}

console.log(`Перевірено якість ${htmlFiles.length} сторінок: метадані, заголовки, зображення, посилання, robots, контраст і відсутність клієнтського JavaScript`);

function contrast(first, second) {
  const [lighter, darker] = [luminance(first), luminance(second)].sort((a, b) => b - a);
  return (lighter + 0.05) / (darker + 0.05);
}

function luminance(hex) {
  const channels = hex.match(/[a-f\d]{2}/gi).map((value) => {
    const channel = Number.parseInt(value, 16) / 255;
    return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}
