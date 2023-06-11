import { type User } from './User'
import { type UserId } from './UserId'
import { type UserName } from './UserName'
import { type UserEmail } from './UserEmail'
import { type ItemId } from '../../items/domain/ItemId'

export interface UserRepository {
  registerUser: (user: User) => Promise<void>
  logIn: (user: User) => Promise<void>
  getCurrentUser: () => Promise<User>
  logOut: () => Promise<void>
  updateUser: (name: UserName, image: UserEmail) => Promise<void>
  updateUserName: (name: UserName) => Promise<void>
  updateUserImage: (id: UserId, image: File) => Promise<void>
  updateUserPassword: (password: string) => Promise<void>
  loginWithGoogle: () => Promise<void>
  loginWithGithub: () => Promise<void>
  subscribeToAuthChanges: (callback: (user: any | null) => void) => () => void
  createUserWithRootFolder: (user: User) => Promise<void>
  getUserRootFolderId: (userId: ItemId) => Promise<ItemId>
}
