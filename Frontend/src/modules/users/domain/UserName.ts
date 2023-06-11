export type UserName = string

export const NAME_MIN_LENGTH = 5
export const NAME_MAX_LENGTH = 12

export function isUserNameValid(name: string): boolean {
  return name.length >= NAME_MIN_LENGTH && name.length <= NAME_MAX_LENGTH
}

export function UserNameNotValidError(name: string): Error {
  return new Error(`Name ${name} is not valid`)
}
