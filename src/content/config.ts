import { defineCollection, z } from "astro:content";

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
  type: "content",
  schema: contentSchema,
});

const portfolio = defineCollection({
  type: "content",
  schema: contentSchema,
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  blog,
  portfolio,
  pages,
};
