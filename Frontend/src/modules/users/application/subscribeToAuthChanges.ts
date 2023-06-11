import { type UserRepository } from "../domain/UserRepository";

export function subscribeToAuthChanges(userRepository: UserRepository, callback:any): any {
    userRepository.subscribeToAuthChanges(callback)
}