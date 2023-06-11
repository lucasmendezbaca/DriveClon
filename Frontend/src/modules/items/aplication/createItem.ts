import { type ItemRepository } from "../domain/ItemRepository";
import { type Item } from "../domain/Item";

export async function createItem(itemRepository: ItemRepository, item: Item): Promise<void> {
    await itemRepository.createItem(item);
}