import { type UserRepository } from "../domain/UserRepository";
import { type User } from "../domain/User";

export async function createUserWithRootFolder(userRepository: UserRepository, user: User): Promise<void> {
    await userRepository.createUserWithRootFolder(user);
}