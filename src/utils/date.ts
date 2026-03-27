export type EventStart = { dateTime?: string; date?: string };

const TZ = "America/New_York";

function toDate(start: EventStart): Date {
    return new Date(start.dateTime || start.date || 0);
}

export function formatDay(start: EventStart): string {
    return toDate(start).toLocaleDateString("en-US", { timeZone: TZ, day: "numeric" });
}

export function formatMonth(start: EventStart): string {
    return toDate(start)
        .toLocaleDateString("en-US", { timeZone: TZ, month: "short" })
        .toUpperCase();
}

export function formatWeekday(start: EventStart): string {
    return toDate(start).toLocaleDateString("en-US", { timeZone: TZ, weekday: "short" });
}

export function formatTime(start: EventStart): string {
    if (!start.dateTime) return "All day";
    return new Date(start.dateTime).toLocaleTimeString("en-US", {
        timeZone: TZ,
        hour: "numeric",
        minute: "2-digit",
    });
}
