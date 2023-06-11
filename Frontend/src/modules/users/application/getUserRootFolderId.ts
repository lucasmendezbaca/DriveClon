import { type UserId } from "../../users/domain/UserId";
import { type ItemId } from "../../items/domain/ItemId";
import { type UserRepository } from "../domain/UserRepository";

export async function getUserRootFolderId(userRepository: UserRepository, userId: UserId): Promise<ItemId> {
    return await userRepository.getUserRootFolderId(userId);
}