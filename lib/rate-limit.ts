const requests = new Map<string, number[]>();

const MAX_REQUESTS = 3;
const WINDOW_MS = 60 * 60 * 1000;

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = requests.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    requests.set(ip, recent);
    return true;
  }

  recent.push(now);
  requests.set(ip, recent);
  return false;
}
