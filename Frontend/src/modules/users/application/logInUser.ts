import { type User } from "../domain/User";
import { type UserRepository } from "../domain/UserRepository";

export async function logInUser(userRepository: UserRepository, user: User): Promise<void> {
	await userRepository.logIn(user);
}