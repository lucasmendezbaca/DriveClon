import { type FolderRepository } from '../domain/FolderRepository'
import { type Folder } from '../domain/Folder'

export async function createFolder(folderRepository: FolderRepository, folder: Folder): Promise<void> {
  await folderRepository.createFolder(folder)
}
