import { type FolderPath } from '../../folders/domain/FolderPath'
import { type FolderName } from '../../folders/domain/FolderName'
import { type FileRepository } from '../domain/FileRepository'

export async function downloadFile(fileRepository: FileRepository, path: FolderPath, name: FolderName): Promise<any> {
  return await fileRepository.downloadFile(path, name)
}
