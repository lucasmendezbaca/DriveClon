import { type Folder, ensureFolderIsValid } from '../../folders/domain/Folder'
import { type FileType, isFileTypeValid, FileTypeNotValidError } from './FileType'
import { type FileSize, isFileSizeValid, FileSizeNotValidError } from './FileSize'
import { type FileQuillData } from './FileQuillData'

export interface File extends Folder {
  type: FileType
  size: FileSize
  quillData: FileQuillData
}

export function ensureFileIsValid({ type, size, quillData, ...folder }: File): void {
  ensureFolderIsValid(folder)
  if (!isFileTypeValid(type)) {
    throw FileTypeNotValidError(type)
  }
  if (!isFileSizeValid(size)) {
    throw FileSizeNotValidError(size)
  }
  // if (!isFileQuillDataValid(quillData)) {
  //   throw FileQuillDataNotValidError(quillData)
  // }
}
