import { type UserRepository } from "../domain/UserRepository";
import { type User } from "../domain/User";

export async function getCurrentUser(userRepository: UserRepository): Promise<User> {
	return await userRepository.getCurrentUser();
}
