import { type FolderId } from '../../folders/domain/FolderId'
import { type FolderPath } from '../../folders/domain/FolderPath'
import { type FileRepository } from '../domain/FileRepository'

export async function uploadFile(
  fileRepository: FileRepository,
  id: FolderId,
  path: FolderPath,
  file: File
): Promise<any> {
  return await fileRepository.uploadFile(id, path, file)
}
