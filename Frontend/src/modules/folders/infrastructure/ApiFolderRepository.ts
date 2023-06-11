import { type Folder, type RootFolder } from '../domain/Folder'
import { type File } from '../../files/domain/File'
import { type FolderRepository } from '../domain/FolderRepository'
import { type FolderId } from '../domain/FolderId'
import { type UserId } from '../../users/domain/UserId'
import { API_BASE_URL } from '../../../env'
import { type FolderPath } from '../domain/FolderPath'
import { type FolderName } from '../domain/FolderName'

export function createApiFolderRepository(): FolderRepository {
  return {
    createFolder,
    createRootFolder,
    getFoldersByUserIdAndParentId,
    downloadFolder,
    getFolderByUserIdAndId,
    deleteFolder,
    deleteItemsByUserIdAndItems,
  }
}

async function createFolder(folder: Folder): Promise<void> {
  try {
    await fetch(`${API_BASE_URL}folders`, {
      method: 'POST',
      body: JSON.stringify(folder),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.log(error)
  }
}

async function createRootFolder(rootFolder: RootFolder): Promise<void> {
  try {
    await fetch(`${API_BASE_URL}folders/root`, {
      method: 'POST',
      body: JSON.stringify(rootFolder),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.log(error)
  }
}

async function getFoldersByUserIdAndParentId(userId: UserId, parentId: FolderId): Promise<Folder[] | undefined> {
  try {
    const response = await fetch(`${API_BASE_URL}folders/${userId}/${parentId}`, {
      method: 'GET',
    })

    const folders = await response.json()

    return folders
  } catch (error) {
    console.log(error)
  }
}

async function downloadFolder(path: FolderPath, name: FolderName): Promise<any> {
  try {
    const response = await fetch(`${API_BASE_URL}folders/download`, {
      method: 'POST',
      body: JSON.stringify({ path, name }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Error al descargar la carpeta')
    }

    const blob = await response.blob()
    const downloadUrl = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = name
    link.click()
  } catch (error) {
    console.error('Error en la solicitud API:', error)
    throw error
  }
}

async function getFolderByUserIdAndId(userId: UserId, id: FolderId): Promise<Folder | undefined> {
  try {
    const response = await fetch(`${API_BASE_URL}folders/folder/${userId}/${id}`, {
      method: 'GET',
    })

    const folder = await response.json()

    return folder
  } catch (error) {
    console.log(error)
  }
}

async function deleteFolder(userId: UserId, fileId: FolderId, path: FolderPath): Promise<void> {
  try {
    await fetch(`${API_BASE_URL}folders/${userId}/${fileId}/${encodeURIComponent(path)}`, {
      method: 'DELETE',
    })
  } catch (error) {
    console.log(error)
  }
}

async function deleteItemsByUserIdAndItems(userId: UserId, items: Array<Folder | File>): Promise<void> {
  try {
    await fetch(`${API_BASE_URL}folders/deleteitems/${userId}`, {
      method: 'POST',
      body: JSON.stringify(items),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.log(error)
  }
}
