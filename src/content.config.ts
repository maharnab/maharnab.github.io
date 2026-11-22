import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
		}),
});

// Project case studies. One Markdown file per project in src/content/projects/.
const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			title: z.string(),
			summary: z.string(),
			period: z.coerce.string(),
			org: z.string(),
			role: z.string().optional(),
			order: z.number(), // lower = earlier in lists
			featured: z.boolean().default(false),
			cover: z.string().optional(), // path under /public
			coverAlt: z.string().optional(),
			skills: z.array(z.string()).default([]),
			metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
			links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
			needsInput: z.boolean().default(false), // shows a "draft – needs your input" badge
		}),
});

export const collections = { blog, projects };
