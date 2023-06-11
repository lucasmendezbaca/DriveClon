import { type User, ensureUserIsValid } from "../domain/User";
import { type UserRepository } from "../domain/UserRepository";

export async function registerUser(userRepository: UserRepository, user: User): Promise<void> {
	ensureUserIsValid(user);

	await userRepository.registerUser(user);
}