import { type FolderId, isFolderIdValid, FolderIdNotValidError } from './FolderId'
import { type UserId, isUserIdValid, UserIdNotValidError } from '../../users/domain/UserId'
import { type FolderName, isFolderNameValid, FolderNameNotValidError } from './FolderName'
import { type FolderDate, isFolderDateValid, FolderDateNotValidError } from './FolderDate'
import { type FolderPath, isFolderPathValid, FolderPathNotValidError } from './FolderPath'

export interface Folder {
  id: FolderId
  parentId: FolderId
  userId: UserId
  name: FolderName
  path: FolderPath
  highlighted: number
  createDate: FolderDate
  updateDate: FolderDate
}

export interface RootFolder {
  id: FolderId
  userId: UserId
  name: FolderName
  path: FolderPath
  highlighted: number
  createDate: FolderDate
  updateDate: FolderDate
}

export function ensureFolderIsValid({ id, parentId, userId, name, path, createDate, updateDate }: Folder): void {
  if (!isFolderIdValid(id)) {
    throw FolderIdNotValidError(id)
  }
  if (!isFolderIdValid(parentId)) {
    throw FolderIdNotValidError(parentId)
  }
  if (!isUserIdValid(userId)) {
    throw UserIdNotValidError(userId)
  }
  if (!isFolderNameValid(name)) {
    throw FolderNameNotValidError(name)
  }
  if (!isFolderDateValid(createDate)) {
    throw FolderDateNotValidError(createDate)
  }
  if (!isFolderDateValid(updateDate)) {
    throw FolderDateNotValidError(updateDate)
  }
  if (!isFolderPathValid(path)) {
    throw FolderPathNotValidError(path)
  }
}
