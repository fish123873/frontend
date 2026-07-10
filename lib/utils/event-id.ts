export function generateEventId(): string {
  const ts = Date.now().toString(36)
  const rand = Math.random().toString(36).slice(2, 8)
  return `evt_${ts}_${rand}`
}
