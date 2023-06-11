import { type UserId } from '../../users/domain/UserId'
import { type FileRepository } from '../domain/FileRepository'
import { type File } from '../domain/File'

export async function getHighlightedFilesByUserId(
  fileRepository: FileRepository,
  userId: UserId
): Promise<File[] | undefined> {
  return await fileRepository.getHighlightedFilesByUserId(userId)
}
