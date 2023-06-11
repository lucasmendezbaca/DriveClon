import { type FileRepository } from '../domain/FileRepository'
import { type File } from '../domain/File'

export async function createFile(fileRepository: FileRepository, file: File): Promise<void> {
  await fileRepository.createFile(file)
}
