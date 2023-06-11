export type ItemDescription = string;

export const DESCRIPTION_MIN_LENGTH = 0;
export const DESCRIPTION_MAX_LENGTH = 100;

export function isItemDescriptionValid(description: string): boolean {
	return description.length >= DESCRIPTION_MIN_LENGTH && description.length <= DESCRIPTION_MAX_LENGTH;
}

export function ItemDescriptionNotValidError(description: string): Error {
	return new Error(`Description ${description} is not valid`);
}