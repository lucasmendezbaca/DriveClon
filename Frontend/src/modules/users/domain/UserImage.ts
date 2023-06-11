export type UserImage = string

export function isUserImageValid(image: string): boolean {
  // const regexExp = /^(?:https?:\/\/)?(?:[\w]+\.)(?:\.?[\w]{2,})(\/[\w]*)*(\.[\w]+)*/;

  // return regexExp.test(image);
  console.log(image)
  return true
}

export function UserImageNotValidError(image: string): Error {
  return new Error(`Image  ${image} is not valid`)
}
