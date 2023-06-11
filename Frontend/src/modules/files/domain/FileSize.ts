export type FileSize = number

export function isFileSizeValid(size: number): boolean {
  // const regexExp =
  // 	/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  console.log(size)
  // return regexExp.test(id);
  return true
}

export function FileSizeNotValidError(size: number): Error {
  return new Error(`Size ${size} is not valid`)
}
