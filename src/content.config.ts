import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const contentSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  imageCaption: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()),
  author: z.string(),
  rss: z.boolean(),
  draft: z.boolean({}).optional(),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: contentSchema,
});

const portfolio = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: './src/content/portfolio',
  }),
  schema: contentSchema,
});

const pages = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const videos = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/videos' }),
  schema: contentSchema,
});

export const collections = {
  blog,
  portfolio,
  pages,
  videos,
};
