export type ItemName = string;

export const NAME_MIN_LENGTH = 5;
export const NAME_MAX_LENGTH = 20;

export function isItemNameValid(name: string): boolean {
	return name.length >= NAME_MIN_LENGTH && name.length <= NAME_MAX_LENGTH;
}

export function ItemNameNotValidError(name: string): Error {
	return new Error(`Name ${name} is not valid`);
}