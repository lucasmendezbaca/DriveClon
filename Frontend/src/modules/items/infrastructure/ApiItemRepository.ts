import { type ItemRepository } from '../domain/ItemRepository'
import { type Item } from '../domain/Item'
import { type ItemId } from '../domain/ItemId'
import { type UserId } from '../../users/domain/UserId'
import { API_BASE_URL } from '../../../env'

export function createApiItemRepository(): ItemRepository {
  return {
    getItemsByUserIdAndParentId,
    createItem,
  }
}

async function getItemsByUserIdAndParentId(userId: UserId, parentId: ItemId): Promise<Item[]> {
  try {
    //   const response = await fetch(`http://localhost:3000/api/v1/items?userId=${userId}&parentId=${parentId}`, {
    const response = await fetch(`${API_BASE_URL}items/${userId}/${parentId}`, {
      method: 'GET',
      headers: {
        // Authorization: `Bearer ${auth.getToken()}`,
        // cabecera para cors
        // 'Access-Control-Allow-Origin': '*',
      },
    })

    if (!response.ok) {
      throw new Error('Error al obtener los items por userId y parentId')
    }

    const items = await response.json()

    return items
  } catch (error) {
    console.error('Error en la solicitud API:', error)
    throw error
  }
}

async function createItem(item: Item): Promise<void> {
  console.log(JSON.stringify(item))
  try {
    const response = await fetch(`${API_BASE_URL}items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${auth.getToken()}`,
      },
      body: JSON.stringify(item),
    })

    if (!response.ok) {
      throw new Error('Error al crear el item')
    }
  } catch (error) {
    console.error('Error en la solicitud API:', error)
    throw error
  }
}
