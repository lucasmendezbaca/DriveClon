import { type FolderRepository } from '../domain/FolderRepository'
import { type Folder } from '../domain/Folder'
import { type FolderId } from '../domain/FolderId'
import { type UserId } from '../../users/domain/UserId'

export async function getFoldersByUserIdAndParentId(
  folderRepository: FolderRepository,
  userId: UserId,
  parentId: FolderId
): Promise<Folder[] | undefined> {
  return await folderRepository.getFoldersByUserIdAndParentId(userId, parentId)
}
