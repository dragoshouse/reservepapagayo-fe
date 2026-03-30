import { z, defineCollection } from 'astro:content';

const journalCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    coverImage: image(),
    category: z.string().optional(),
  }),
});

export const collections = {
  'journal': journalCollection,
};
