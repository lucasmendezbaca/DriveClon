import { type FolderRepository } from '../domain/FolderRepository'
import { type UserId } from '../../users/domain/UserId'
import { type FolderId } from '../../folders/domain/FolderId'
import { type FolderPath } from '../../folders/domain/FolderPath'

export async function deleteFolder(
  folderRepository: FolderRepository,
  userId: UserId,
  id: FolderId,
  path: FolderPath
): Promise<void> {
  await folderRepository.deleteFolder(userId, id, path)
}
