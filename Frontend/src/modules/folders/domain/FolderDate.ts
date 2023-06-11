export type FolderDate = string

export function isFolderDateValid(date: string): boolean {
  console.log(date)
  return true
}

export function FolderDateNotValidError(date: string): Error {
  return new Error(`Date ${date} is not valid`)
}
