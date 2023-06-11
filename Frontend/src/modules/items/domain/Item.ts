import { type UserId, isUserIdValid, UserIdNotValidError } from '../../users/domain/UserId'
import { type ItemId, isItemIdValid, ItemIdNotValidError } from './ItemId'
import { type ItemName, isItemNameValid, ItemNameNotValidError } from './ItemName'
import { type ItemDescription, isItemDescriptionValid, ItemDescriptionNotValidError } from './ItemDescription'

export enum ItemTypes {
  File = 'File',
  Folder = 'Folder',
}

export interface Item {
  id: ItemId
  parentId: ItemId
  userId: UserId
  name: ItemName
  description: ItemDescription
  type: ItemTypes
  content: string
  createDate: string
  updateDate: string
}

export function ensureItemIsValid({ id, userId, name, description }: Item): void {
  if (!isItemIdValid(id)) {
    throw ItemIdNotValidError(id)
  }
  if (!isUserIdValid(userId)) {
    throw UserIdNotValidError(userId)
  }
  if (!isItemNameValid(name)) {
    throw ItemNameNotValidError(name)
  }
  if (!isItemDescriptionValid(description)) {
    throw ItemDescriptionNotValidError(description)
  }
}
