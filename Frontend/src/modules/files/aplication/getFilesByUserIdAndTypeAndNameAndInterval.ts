import { type UserId } from '../../users/domain/UserId'
import { type FileRepository } from '../domain/FileRepository'
import { type File } from '../domain/File'

export async function getFilesByUserIdAndTypeAndNameAndInterval(
  fileRepository: FileRepository,
  userId: UserId,
  type: string,
  name: string,
  interval: number
): Promise<File[] | undefined> {
  return await fileRepository.getFilesByUserIdAndTypeAndNameAndInterval(userId, type, name, interval)
}
