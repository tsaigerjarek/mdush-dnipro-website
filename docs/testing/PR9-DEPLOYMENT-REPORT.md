# Звіт готовності до розгортання — PR №9

## Межі

Підготовлено автоматичне розгортання статичного Astro-сайту в GitHub Pages після злиття в `main`. Draft PR не публікує сайт. Власний домен, DNS, `CNAME` і примусове HTTPS не налаштовувалися.

## Production-конфігурація

- адреса: `https://tsaigerjarek.github.io/mdush-dnipro-website/`;
- `site`: `https://tsaigerjarek.github.io`;
- `base`: `/mdush-dnipro-website`;
- усі внутрішні посилання та локальні зображення враховують base path;
- canonical та Open Graph URL формуються з production-адреси;
- `robots.txt` містить посилання на production-карту сайту;
- `sitemap.xml` генерується під час статичної збірки.

## Автоматичні перевірки

- Astro і TypeScript: 0 помилок, 0 попереджень, 0 підказок;
- статично зібрано 11 HTML-сторінок і `sitemap.xml`;
- перевірено 11 маршрутів;
- пройдено перевірки метаданих, заголовків, зображень, посилань, `robots`, контрасту та відсутності клієнтського JavaScript;
- пройдено окрему перевірку base path, canonical URL, `robots.txt` і `sitemap.xml`;
- `npm audit`: 0 відомих вразливостей.

## Workflow

- запускається лише для `main` або вручну;
- використовує офіційний `withastro/action@v6`;
- публікує через `actions/deploy-pages@v5`;
- має мінімальні дозволи `contents: read`, `pages: write`, `id-token: write`;
- зупиняє розгортання, якщо тести або збірка не пройшли.

## Дії після погодження

Після окремого погодження й злиття PR №9:

1. у `Settings → Pages` вибрати джерело `GitHub Actions`;
2. перевірити перший workflow;
3. перевірити production-адресу, HTTPS і всі маршрути;
4. провести Lighthouse;
5. зафіксувати результат окремим звітом;
6. домен і DNS розглядати окремим етапом.
