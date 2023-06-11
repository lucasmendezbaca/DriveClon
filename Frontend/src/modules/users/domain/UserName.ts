export type UserName = string;

export const TITLE_MIN_LENGTH = 5;
export const TITLE_MAX_LENGTH = 20;

export function isUserNameValid(name: string): boolean {
	return name.length >= TITLE_MIN_LENGTH && name.length <= TITLE_MAX_LENGTH;
}

export function UserNameNotValidError(name: string): Error {
	return new Error(`Name ${name} is not valid`);
}