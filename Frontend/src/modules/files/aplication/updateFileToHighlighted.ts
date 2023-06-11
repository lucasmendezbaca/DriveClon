import { type UserId } from '../../users/domain/UserId'
import { type FileRepository } from '../domain/FileRepository'
import { type FolderId } from '../../folders/domain/FolderId'

export async function updateFileToHighlighted(
  fileRepository: FileRepository,
  userId: UserId,
  id: FolderId,
  highlighted: number
): Promise<void> {
  await fileRepository.updateFileToHighlighted(userId, id, highlighted)
}
