import { type UserRepository } from '../domain/UserRepository'
import { type UserId } from '../domain/UserId'

export async function updateUserImage(userRepository: UserRepository, id: UserId, image: File): Promise<void> {
  await userRepository.updateUserImage(id, image)
}
