import { type FolderPath } from '../../folders/domain/FolderPath'
import { type FolderName } from '../../folders/domain/FolderName'
import { type FolderRepository } from '../domain/FolderRepository'

export async function downloadFolder(
  folderRepository: FolderRepository,
  path: FolderPath,
  name: FolderName
): Promise<any> {
  return await folderRepository.downloadFolder(path, name)
}
