import { type Item } from "./Item";
import { type ItemId } from "./ItemId";
import { type UserId } from "../../users/domain/UserId";

export interface ItemRepository {
    getItemsByUserIdAndParentId: (userId: UserId, parentId: ItemId) => Promise<Item[]>;
    createItem: (item: Item) => Promise<void>;
    // getItems: () => Promise<Item[]>;
    // getItem: (id: ItemId) => Promise<Item>;
    // addItem: (item: Item) => Promise<void>;
    // removeItem: (id: ItemId) => Promise<void>;
    // updateItem: (item: Item) => Promise<void>;
}