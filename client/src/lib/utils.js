/**
 * Merge class names (simple utility without clsx dependency)
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format a date string to human-readable format
 */
export function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Estimate reading time for a block of text
 */
export function getReadingTime(text) {
  const words = text?.trim().split(/\s+/).length ?? 0;
  return Math.ceil(words / 200);
}

/**
 * Clamp a number between min and max
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Debounce a function
 */
export function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
