export type FolderPath = string

export function isFolderPathValid(path: string): boolean {
  // const regexExp =
  // 	/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

  // return regexExp.test(id);
  console.log(path)
  return true
}

export function FolderPathNotValidError(path: string): Error {
  return new Error(`Path ${path} is not valid`)
}
