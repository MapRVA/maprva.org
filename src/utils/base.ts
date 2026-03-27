/** Prepend Astro's BASE_URL to an absolute path. */
export function base(path: string): string {
  const b = import.meta.env.BASE_URL.replace(/\/$/, "");
  return b + path;
}
