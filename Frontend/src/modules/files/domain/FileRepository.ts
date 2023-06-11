import { type FolderId } from '../../folders/domain/FolderId'
import { type FolderName } from '../../folders/domain/FolderName'
import { type FolderPath } from '../../folders/domain/FolderPath'
import { type File as FileType } from './File'
import { type UserId } from '../../users/domain/UserId'

export interface FileRepository {
  createFile: (file: FileType) => Promise<void>
  uploadFile: (id: FolderId, path: FolderPath, file: File) => Promise<any>
  downloadFile: (path: FolderPath, name: FolderName) => Promise<any>
  deleteFile: (userId: UserId, fileId: FolderId, path: FolderPath) => Promise<void>
  getFilesByUserIdAndParentId: (userId: UserId, parentId: FolderId) => Promise<FileType[] | undefined>
  getRecentFilesByUserIdAndIterval: (userId: UserId, interval: number) => Promise<FileType[] | undefined>
  getHighlightedFilesByUserId: (userId: UserId) => Promise<FileType[] | undefined>
  getFilesByUserIdAndTypeAndNameAndInterval: (
    userId: UserId,
    type: string,
    name: string,
    interval: number
  ) => Promise<FileType[] | undefined>
  updateFileToHighlighted: (userId: UserId, fileId: FolderId, highlighted: number) => Promise<void>
}
