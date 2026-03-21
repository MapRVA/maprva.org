export type EventStart = { dateTime?: string; date?: string };

function toDate(start: EventStart): Date {
    return new Date(start.dateTime || start.date || 0);
}

export function formatDay(start: EventStart): string {
    return toDate(start).getDate().toString();
}

export function formatMonth(start: EventStart): string {
    return toDate(start)
        .toLocaleDateString("en-US", { month: "short" })
        .toUpperCase();
}

export function formatWeekday(start: EventStart): string {
    return toDate(start).toLocaleDateString("en-US", { weekday: "short" });
}

export function formatTime(start: EventStart): string {
    if (!start.dateTime) return "All day";
    return new Date(start.dateTime).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
    });
}
