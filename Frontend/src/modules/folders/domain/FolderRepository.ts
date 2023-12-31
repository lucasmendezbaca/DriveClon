import { type Folder, type RootFolder } from './Folder'
import { type FolderId } from './FolderId'
import { type UserId } from '../../users/domain/UserId'
import { type File } from '../../files/domain/File'

export interface FolderRepository {
  createFolder: (folder: Folder) => Promise<void>
  createRootFolder: (rootFolder: RootFolder) => Promise<void>
  getFoldersByUserIdAndParentId: (userId: UserId, parentId: FolderId) => Promise<Folder[] | undefined>
  downloadFolder: (path: string, name: string) => Promise<any>
  getFolderByUserIdAndId: (userId: UserId, id: FolderId) => Promise<Folder | undefined>
  deleteFolder: (userId: UserId, folderId: FolderId, path: string) => Promise<void>
  deleteItemsByUserIdAndItems: (userId: UserId, items: Array<Folder | File>) => Promise<void>
}
