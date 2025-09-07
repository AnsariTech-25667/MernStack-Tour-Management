/**
 * Simple fetch wrapper for the frontend.
 * Replace with axios or fetch-based client for real project.
 */
export async function apiGet(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Network error');
  return res.json();
}
