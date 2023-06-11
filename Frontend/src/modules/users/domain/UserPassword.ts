export type UserPassword = string

export function isUserPasswordValid(password: string): boolean {
  const regexExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g

  return regexExp.test(password)
  // console.log(password)
  // return true
}

export function UserPasswordNotValidError(password: string): Error {
  return new Error(`Password ${password} is not valid`)
}
