import { defineCollection, reference,z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		
		publicationDate: z.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).optional(),
		relatedPosts: z.array(reference('blog')).optional(),
	}),
});

export const collections = { blog };
