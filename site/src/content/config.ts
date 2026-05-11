import { defineCollection, z } from "astro:content";

const docs = defineCollection({
  type: "content",
  schema: z.object({
    source_path: z.string().optional(),
    upstream_sha: z.string().optional(),
    translation_status: z.string().optional(),
    official_url: z.string().optional(),
    official: z.boolean().optional()
  })
});

export const collections = { docs };

