export type FolderName = string

export const NAME_MIN_LENGTH = 5
export const NAME_MAX_LENGTH = 20

export function isFolderNameValid(name: string): boolean {
  return name.length >= NAME_MIN_LENGTH && name.length <= NAME_MAX_LENGTH
}

export function FolderNameNotValidError(name: string): Error {
  return new Error(`Name ${name} is not valid`)
}
