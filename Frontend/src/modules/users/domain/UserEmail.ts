export type UserEmail = string

export function isUserEmailValid(email: string): boolean {
  const regexExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi

  return regexExp.test(email)
}

export function UserEmailNotValidError(email: string): Error {
  return new Error(`Email ${email} is not valid`)
}
