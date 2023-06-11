import { type UserRepository } from "../domain/UserRepository";
import { type UserPassword } from "../domain/UserPassword";

export async function updateUserPassword(userRepository: UserRepository, newPassword: UserPassword): Promise<void> {
	await userRepository.updateUserPassword(newPassword);
}