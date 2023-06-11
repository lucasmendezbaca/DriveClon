import { type UserRepository } from '../domain/UserRepository'

export async function loginWithGithub(userRepository: UserRepository): Promise<void> {
  await userRepository.loginWithGithub()
}
