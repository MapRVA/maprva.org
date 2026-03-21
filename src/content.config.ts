import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { googleCalendarLoader } from "./loaders/google-calendar";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    blurb: z.string().optional(),
    icon: z.string().optional(),
    tag: z.string().optional(),
    sign: z.string().optional(),
    image: z.string().optional(),
    color: z
      .enum(["accent", "teal", "gold", "purple", "pink", "ink"])
      .default("accent"),
    sortOrder: z.number().optional(),
    buttons: z
      .array(
        z.object({
          link: z.string().url(),
          label: z.string(),
        }),
      )
      .default([]),
    roles: z
      .array(
        z.object({
          person: z.string(),
          title: z.string(),
          personal: z.boolean().optional(),
        }),
      )
      .default([]),
  }),
});

const people = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/people" }),
  schema: z.object({
    title: z.string(),
    pronouns: z.string().optional(),
    image: z.string().optional(),
    osm: z.string().optional(),
    website: z.string().url().optional(),
    mastodon: z.string().url().optional(),
    github: z.string().optional(),
    linkedin: z.string().optional(),
    twitter: z.string().optional(),
    bluesky: z.string().optional(),
    roles: z
      .array(
        z.object({
          title: z.string(),
          /** Slug of a project in the projects collection */
          at: z.string(),
          /** True when this is a member's personal project, not a MapRVA community project */
          personal: z.boolean().optional(),
        }),
      )
      .default([]),
  }),
});

const events = defineCollection({
  loader: googleCalendarLoader({
    calendarId: import.meta.env.GOOGLE_CALENDAR_ID,
    apiKey: import.meta.env.GOOGLE_API_KEY,
    maxResults: 25,
    daysAhead: 365,
  }),
});

const pastEvents = defineCollection({
  loader: googleCalendarLoader({
    calendarId: import.meta.env.GOOGLE_CALENDAR_ID,
    apiKey: import.meta.env.GOOGLE_API_KEY,
    maxResults: 100,
    daysBehind: 365,
  }),
});

export const collections = { projects, people, events, pastEvents };
