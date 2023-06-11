export type FileType = string

export function isFileTypeValid(type: string): boolean {
  // const regexExp =
  // 	/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  console.log(type)
  // return regexExp.test(id);
  return true
}

export function FileTypeNotValidError(type: string): Error {
  return new Error(`Type ${type} is not valid`)
}
