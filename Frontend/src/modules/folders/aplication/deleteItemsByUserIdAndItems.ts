import { type FolderRepository } from '../domain/FolderRepository'
import { type UserId } from '../../users/domain/UserId'
import { type Folder } from '../domain/Folder'
import { type File } from '../../files/domain/File'

export async function deleteItemsByUserIdAndItems(
  folderRepository: FolderRepository,
  userId: UserId,
  items: Array<Folder | File>
): Promise<void> {
  await folderRepository.deleteItemsByUserIdAndItems(userId, items)
}
