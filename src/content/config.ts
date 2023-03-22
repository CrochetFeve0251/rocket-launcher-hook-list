import { z, defineCollection } from "astro:content";

const hooksCollection = defineCollection({
    schema: z.object({
        type: z.string(),
        name: z.string(),
        since: z.string().optional(),
        params: z.any(),
        summery: z.string().optional(),
        description: z.string().optional(),
        author: z.any()
    })
});


export const collections = {
    'hooks': hooksCollection,
};
