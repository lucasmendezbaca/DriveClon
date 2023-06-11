import { type ItemRepository } from "../domain/ItemRepository";
import { type Item } from "../domain/Item";
import { type ItemId } from "../domain/ItemId";
import { type UserId } from "../../users/domain/UserId";

export async function getItemsByUserIdAndParentId(itemRepository: ItemRepository, userId: UserId, parentId: ItemId): Promise<Item[]> {
    return await itemRepository.getItemsByUserIdAndParentId(userId, parentId);
}