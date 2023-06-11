export type ItemId = string

export function isItemIdValid(id: string): boolean {
  // const regexExp =
  // 	/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

  // return regexExp.test(id);
  console.log(id)
  return true
}

export function ItemIdNotValidError(id: string): Error {
  return new Error(`Id ${id} is not valid`)
}
