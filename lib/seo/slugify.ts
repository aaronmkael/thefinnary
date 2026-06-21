const STOP_WORDS = new Set([
  'a', 'an', 'the', 'of', 'and', 'or', 'in', 'to', 'for', 'with', 'on', 'at', 'from', 'by', 'as', 'is', 'was', 'are', 'were',
]);

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .split(/\s+/)
    .filter((word) => !STOP_WORDS.has(word))
    .slice(0, 6)
    .join('-');
}
