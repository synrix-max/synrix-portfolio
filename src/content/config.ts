import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    date:        z.date(),
    description: z.string().optional(),
    category:    z.string().optional(),   // "devlogs" | "notes" | "open source" | etc.
    tags:        z.array(z.string()).optional(),
    draft:       z.boolean().default(false),
  }),
});

const journalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    date:        z.date(),
    description: z.string().optional(),
    draft:       z.boolean().default(false),
  }),
});

const notesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    date:        z.date(),
    description: z.string().optional(),
    tags:        z.array(z.string()).optional(),
    draft:       z.boolean().default(false),
  }),
});

export const collections = {
  blog:    blogCollection,
  journal: journalCollection,
  notes:   notesCollection,
};
