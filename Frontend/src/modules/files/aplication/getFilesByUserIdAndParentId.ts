import { type UserId } from '../../users/domain/UserId'
import { type FileRepository } from '../domain/FileRepository'
import { type File } from '../domain/File'
import { type FolderId } from '../../folders/domain/FolderId'

export async function getFilesByUserIdAndParentId(
  fileRepository: FileRepository,
  userId: UserId,
  parentId: FolderId
): Promise<File[] | undefined> {
  return await fileRepository.getFilesByUserIdAndParentId(userId, parentId)
}
