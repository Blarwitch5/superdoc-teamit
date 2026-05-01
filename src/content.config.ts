import { defineCollection, z } from 'astro:content'
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema'

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        category:    z.string().optional(),
        subcategory: z.string().optional(),
        videoUrl:    z.string().optional(),
        createdBy:   z.string().optional(),
        createdAt:   z.string().optional(),
        modifiedBy:  z.string().optional(),
        modifiedAt:  z.string().optional(),
      })
    })
  })
}
