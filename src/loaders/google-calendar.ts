// src/loaders/google-calendar.ts
import type { Loader, LoaderContext } from "astro/loaders";
import { z } from "astro/zod";

export interface GoogleCalendarLoaderOptions {
  calendarId: string;
  apiKey: string;
  maxResults?: number;
  daysAhead?: number;
  daysBehind?: number;
}

export const calendarEventSchema = z.object({
  summary: z.string().default("(Untitled)"),
  description: z.string().optional(),
  location: z.string().optional(),
  start: z.object({
    dateTime: z.string().optional(),
    date: z.string().optional(),
    timeZone: z.string().optional(),
  }),
  end: z.object({
    dateTime: z.string().optional(),
    date: z.string().optional(),
    timeZone: z.string().optional(),
  }),
  htmlLink: z.string().optional(),
  status: z.string().optional(),
  updated: z.string().optional(),
});

export function googleCalendarLoader(options: GoogleCalendarLoaderOptions): Loader {
  return {
    name: options.daysBehind ? "google-calendar-loader-past" : "google-calendar-loader",
    schema: calendarEventSchema,

    load: async ({ store, logger, meta }: LoaderContext) => {
      const { calendarId, apiKey, maxResults = 50, daysAhead = 365, daysBehind } = options;

      if (!calendarId || !apiKey) {
        logger.warn(
          "Missing GOOGLE_CALENDAR_ID or GOOGLE_API_KEY — skipping calendar fetch"
        );
        return;
      }

      // In dev, skip fetch if we already have cached data from a recent load
      const lastFetched = meta.get("lastFetched");
      if (import.meta.env.DEV && lastFetched && store.keys().length > 0) {
        const age = Date.now() - new Date(lastFetched as string).getTime();
        const maxAge = 10 * 60 * 1000; // 10 minutes
        if (age < maxAge) {
          logger.info(
            `Using cached events (${store.keys().length} events, fetched ${Math.round(age / 1000)}s ago)`
          );
          return;
        }
      }

      // Events that started more than 6 hours ago are considered "past"
      const boundary = new Date(Date.now() - 6 * 3600000).toISOString();
      const timeMin = daysBehind
        ? new Date(Date.now() - daysBehind * 86400000).toISOString()
        : boundary;
      const timeMax = daysBehind
        ? boundary
        : new Date(Date.now() + daysAhead * 86400000).toISOString();

      const url = new URL(
        `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`
      );
      url.searchParams.set("key", apiKey);
      url.searchParams.set("timeMin", timeMin);
      url.searchParams.set("timeMax", timeMax);
      url.searchParams.set("singleEvents", "true");
      url.searchParams.set("orderBy", "startTime");
      url.searchParams.set("maxResults", String(maxResults));

      logger.info(`Sending request to Google Calendar API for: ${calendarId}`);
      const res = await fetch(url.toString());
      if (!res.ok) throw new Error(`Calendar API error: ${res.status}`);
      const data = await res.json();

      store.clear();
      for (const event of data.items ?? []) {
        store.set({
          id: event.id,
          data: {
            summary: event.summary,
            description: event.description,
            location: event.location,
            start: event.start,
            end: event.end,
            htmlLink: event.htmlLink,
            status: event.status,
            updated: event.updated,
          },
        });
      }

      meta.set("lastFetched", new Date().toISOString());
      logger.info(`Stored ${data.items?.length ?? 0} events`);
    },
  };
}
