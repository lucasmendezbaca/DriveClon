export type FileQuillData = object | null

export function isFileQuillDataValid(quillData: object): boolean {
  // const regexExp =
  // 	/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  console.log(quillData)
  // return regexExp.test(id);
  return true
}

export function FileQuillDataNotValidError(quillData: object): Error {
  return new Error(`Size ${quillData.toString} is not valid`)
}
