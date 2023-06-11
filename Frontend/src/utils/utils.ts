export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 19).replace('T', ' ')
}

export function toYearMonthDay(date: string): string {
  return date.slice(0, 10)
}

export function bytesToKiloBites(bytes: number): number {
  return Math.ceil(bytes / 1024)
}
