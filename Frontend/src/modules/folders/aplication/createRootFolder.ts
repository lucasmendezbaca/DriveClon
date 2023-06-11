import { type FolderRepository } from '../domain/FolderRepository'
import { type RootFolder } from '../domain/Folder'

export async function createRootFolder(folderRepository: FolderRepository, folder: RootFolder): Promise<void> {
  await folderRepository.createRootFolder(folder)
}
