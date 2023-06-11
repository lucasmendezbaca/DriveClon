import { type FolderRepository } from '../domain/FolderRepository'
import { type Folder } from '../domain/Folder'
import { type FolderId } from '../domain/FolderId'
import { type UserId } from '../../users/domain/UserId'

export async function getFolderByUserIdAndId(
  folderRepository: FolderRepository,
  userId: UserId,
  id: FolderId
): Promise<Folder | undefined> {
  return await folderRepository.getFolderByUserIdAndId(userId, id)
}
