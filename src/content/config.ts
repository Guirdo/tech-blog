import { z,reference, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        author: reference('author'),
        image: z.string(),
        imageAlt: z.string(),
        tags: z.array(z.string()),
    }),
});

const authorCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        image: z.string(),
        nickname: z.string(),
    }),
});

export const collections = {
  'blog': blogCollection,
  'author': authorCollection
};