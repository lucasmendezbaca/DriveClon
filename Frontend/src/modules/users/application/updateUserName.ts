import { type UserRepository } from '../domain/UserRepository'
import { type UserName } from '../domain/UserName'

export async function updateUserName(userRepository: UserRepository, name: UserName): Promise<void> {
  await userRepository.updateUserName(name)
}
