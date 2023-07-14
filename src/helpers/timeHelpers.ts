export function getLocaleTime(time: number, timezone: number) {
  const d = new Date(time)
  d.setMinutes(d.getMinutes() + timezone / 60)
  return d.toLocaleTimeString('en-US', { timeZone: 'UTC', hour12: false })
}
