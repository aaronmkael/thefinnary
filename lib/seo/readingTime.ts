/**
 * Strip HTML tags and count words in content.
 */
export function calculateWordCount(html: string): number {
  const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  if (!text) return 0;
  return text.split(' ').length;
}

/**
 * Calculate reading time in minutes (238 wpm average).
 */
export function calculateReadingTime(html: string): number {
  const words = calculateWordCount(html);
  return Math.max(1, Math.ceil(words / 238));
}

/**
 * Format an ISO date string (e.g. '2026-02-01') for the given locale.
 */
export function formatDate(dateStr: string, lang: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString(lang, { day: 'numeric', month: 'long', year: 'numeric' });
}

/**
 * Format a short date for card displays (e.g. 'Feb 2026' or locale equivalent).
 */
export function formatDateShort(dateStr: string, lang: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString(lang, { month: 'short', year: 'numeric' });
}
