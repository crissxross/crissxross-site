import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		author: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
    draft: z.boolean().optional(),
    heroImage: image().optional(),
	}),
});

const works = defineCollection({
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
    strapline: z.string().optional(),
		author: z.string(),
		// Transform string to Date object
		releaseDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		wip: z.boolean(),
		tech: z.string().optional(),
    image: image().optional(),
    imageAlt: z.string().optional(),
		tags: z.string().array().optional(),
		awards: z.object({
			name: z.string(),
			url: z.string().optional(),
		}).array().optional(),
		accolades: z.object({
			name: z.string(),
			url: z.string().optional(),
		}).array().optional(),
		collaborators: z.string().optional(),
		publisher: z.string().optional(),
		// Advanced: Validate that the string is also a URL
		url: z.string().url().optional(),
    featured: z.boolean().optional(),
    star: z.boolean().optional(),
	}),
});

const archive = defineCollection({
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		author: z.string(),
		// Transform string to Date object
		releaseDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		lastReleaseDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)).optional(),
		tech: z.string().optional(),
    imageStrip: image().optional(),
    imageThumb: image().optional(),
		youtubeVideos: z.object({
			id: z.string(),
			name: z.string(),
		}).array().optional(),
		tags: z.string().array().optional(),
		awards: z.object({
			name: z.string(),
			url: z.string().optional(),
		}).array().optional(),
		accolades: z.object({
			name: z.string(),
			url: z.string().optional(),
		}).array().optional(),
		collaborators: z.string().optional(),
		publisher: z.string().optional(),
		// Advanced: Validate that the string is also a URL
		url: z.string().url().optional(),
    featured: z.boolean().optional(),
    star: z.boolean().optional(),
	}),
});

export const collections = {
	blog,
	works,
	archive,
};
