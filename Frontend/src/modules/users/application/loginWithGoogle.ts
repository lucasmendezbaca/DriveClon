import { type UserRepository } from "../domain/UserRepository";

export async function loginWithGoogle(userRepository: UserRepository): Promise<void> {
	await userRepository.loginWithGoogle();
}