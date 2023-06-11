import { type UserRepository } from '../domain/UserRepository'
import { type UserName } from '../domain/UserName'
import { type UserImage } from '../domain/UserImage'

export async function updateCurrentUser(
  userRepository: UserRepository,
  name: UserName,
  image: UserImage
): Promise<void> {
  await userRepository.updateUser(name, image)
}
