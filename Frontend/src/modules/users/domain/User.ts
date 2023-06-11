import { type UserId, isUserIdValid, UserIdNotValidError } from './UserId';
import { type UserName, isUserNameValid, UserNameNotValidError } from './UserName';
import { type UserEmail, isUserEmailValid, UserEmailNotValidError } from './UserEmail';
import { type UserImage, isUserImageValid, UserImageNotValidError } from './UserImage';
import { type UserPassword, isUserPasswordValid, UserPasswordNotValidError } from './UserPassword';
import { type ItemId } from '../../items/domain/ItemId';

export interface User {
    id: UserId;
    name: UserName;
    email: UserEmail;
    password: UserPassword;
    image: UserImage;
    rootFolderId: ItemId;
}

export function ensureUserIsValid({ id, name, email, password, image }: User): void {
	if (!isUserIdValid(id)) {
		throw UserIdNotValidError(id);
	}
	if (!isUserNameValid(name)) {
		throw UserNameNotValidError(name);
	}
    if (!isUserEmailValid(email)) {
        throw UserEmailNotValidError(email);
    }
    if (!isUserPasswordValid(password)) {
        throw UserPasswordNotValidError(password);
    }
    if (!isUserImageValid(image)) {
        throw UserImageNotValidError(image);
    }
}