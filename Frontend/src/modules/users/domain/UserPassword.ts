export type UserPassword = string

export function isUserPasswordValid(password: string): boolean {
  // const regexExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g
  // const regexExp = /^(?=.*[a-zñÑ])(?=.*[A-ZÑ])(?=.*\d)[a-zA-ZñÑ\d@$!%*?&]{8,}$/g
  const regexExp = /^(?=.*[a-záéíóúüñ])(?=.*[A-ZÁÉÍÓÚÜÑ])(?=.*\d)[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\d@$!%*?&]{8,}$/gu

  return regexExp.test(password)
}

export function UserPasswordNotValidError(password: string): Error {
  return new Error(`Password ${password} is not valid`)
}
