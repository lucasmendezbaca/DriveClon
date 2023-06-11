import { type UserRepository } from "../domain/UserRepository";

export async function logOutUser(userRepository: UserRepository): Promise<void> {
	await userRepository.logOut();
}