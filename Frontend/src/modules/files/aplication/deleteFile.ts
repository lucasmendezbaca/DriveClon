import { type FileRepository } from '../domain/FileRepository'
import { type UserId } from '../../users/domain/UserId'
import { type FolderId } from '../../folders/domain/FolderId'
import { type FolderPath } from '../../folders/domain/FolderPath'

export async function deleteFile(
  fileRepository: FileRepository,
  userId: UserId,
  id: FolderId,
  path: FolderPath
): Promise<void> {
  await fileRepository.deleteFile(userId, id, path)
}
