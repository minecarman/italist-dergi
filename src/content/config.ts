import { defineCollection, z } from 'astro:content';

const author = z.object({ name: z.string(), role: z.string().optional(), avatar: z.string().optional() });
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(), description: z.string(), pubDate: z.coerce.date(), author,
    category: z.enum(['edebiyat', 'tarih', 'dil', 'kultur']), tags: z.array(z.string()),
    heroImage: z.string().url(), featured: z.boolean().default(false), readingTime: z.number()
  })
});
const issues = defineCollection({
  type: 'data',
  schema: z.object({
    issueNumber: z.number(), title: z.string(), date: z.coerce.date(), coverImage: z.string().url(),
    pdfUrl: z.string().optional(), embedUrl: z.string().url().optional(), summary: z.string(), pageCount: z.number()
  })
});
export const collections = { blog, issues };
