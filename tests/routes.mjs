import { access, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const routes = [
  '',
  'pro-zaklad',
  'sportyvni-napriamy',
  'trenerskyi-sklad',
  'yak-vstupyty',
  'zmahannia',
  'zmahannia/mdush-liga',
  'dokumenty',
  'prozorist',
  'novyny',
  'kontakty',
  'polityka-pryvatnosti',
  'pravyla-vykorystannia',
  'novyny/ofitsiinyi-sait',
  'novyny/sportyvni-napriamy-2026-2027',
  'novyny/yak-zvernutysia-shchodo-vstupu',
];

for (const route of routes) {
  const file = join('dist', route, 'index.html');
  await access(file);
  const html = await readFile(file, 'utf8');

  if (!html.includes('<html lang="uk">')) {
    throw new Error(`Маршрут ${route || '/'} не має lang="uk"`);
  }

  if (!html.includes('<main id="main-content"')) {
    throw new Error(`Маршрут ${route || '/'} не має основного вмісту`);
  }
}

console.log(`Перевірено маршрутів: ${routes.length}`);
