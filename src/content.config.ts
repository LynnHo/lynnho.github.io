import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const entryFields = ({ image }: Parameters<NonNullable<Parameters<typeof defineCollection>[0]["schema"]>>[0]) => ({
  slug: z.string(),
  order: z.number(),
  title_html: z.string(),
  authors_html: z.string(),
  image: image(),
  image_link: z.string().optional().default(""),
  image_fit: z.enum(["cover", "contain"]).optional().default("cover"),
  badges: z
    .array(
      z.object({
        url: z.string().optional(),
        image: z.string()
      })
    )
    .optional()
    .default([]),
  links: z
    .array(
      z.object({
        label: z.string(),
        url: z.string().optional().default("")
      })
    )
    .optional()
    .default([]),
  bib: z.string().optional()
});

const works = defineCollection({
  loader: glob({
    base: "./src/content/works",
    pattern: "**/index.md"
  }),
  schema: ({ image }) =>
    z.object({
      ...entryFields({ image }),
      work: z.boolean().default(true),
      section: z.enum(["tutorial", "publication"]),
    })
});

const competitions = defineCollection({
  loader: glob({
    base: "./src/content/competitions",
    pattern: "**/index.md"
  }),
  schema: ({ image }) => z.object(entryFields({ image }))
});

export const collections = { works, competitions };
