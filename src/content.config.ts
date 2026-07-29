import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    publishedAt: z.coerce.date(),
    summary: z.string(),
    editor: z.string(),
    status: z.enum(['draft', 'published']),
    cover: z.string(),
    coverAlt: z.string(),
  }),
});

export const collections = { news };
