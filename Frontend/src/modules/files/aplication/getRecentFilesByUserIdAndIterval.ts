import { type UserId } from '../../users/domain/UserId'
import { type FileRepository } from '../domain/FileRepository'
import { type File } from '../domain/File'

export async function getRecentFilesByUserIdAndIterval(
  fileRepository: FileRepository,
  userId: UserId,
  interval: number
): Promise<File[] | undefined> {
  return await fileRepository.getRecentFilesByUserIdAndIterval(userId, interval)
}
