import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default('https://actoyama.jp'),
  NEXT_PUBLIC_CONTACT_EMAIL: z.string().email().optional(),
  NOTION_API_KEY: z.string().optional(),
  NOTION_NEWS_DATABASE_ID: z.string().optional(),
  NOTION_RESULTS_DATABASE_ID: z.string().optional(),
  REVALIDATE_SECRET: z.string().optional(),
})

export const env = envSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  NOTION_API_KEY: process.env.NOTION_API_KEY,
  NOTION_NEWS_DATABASE_ID: process.env.NOTION_NEWS_DATABASE_ID,
  NOTION_RESULTS_DATABASE_ID: process.env.NOTION_RESULTS_DATABASE_ID,
  REVALIDATE_SECRET: process.env.REVALIDATE_SECRET,
})

