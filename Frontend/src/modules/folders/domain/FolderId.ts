export type FolderId = string

export function isFolderIdValid(id: string): boolean {
  // const regexExp =
  // 	/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

  // return regexExp.test(id);
  console.log(id)
  return true
}

export function FolderIdNotValidError(id: string): Error {
  return new Error(`Id ${id} is not valid`)
}
