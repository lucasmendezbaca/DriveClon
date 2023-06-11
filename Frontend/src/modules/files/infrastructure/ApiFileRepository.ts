import { type FolderId } from '../../folders/domain/FolderId'
import { type FolderPath } from '../../folders/domain/FolderPath'
import { type File as FileType } from '../domain/File'
import { type FileRepository } from '../domain/FileRepository'
import { type UserId } from '../../users/domain/UserId'
import { API_BASE_URL } from '../../../env'
import { type FolderName } from '../../folders/domain/FolderName'

export function createApiFileRepository(): FileRepository {
  return {
    createFile,
    uploadFile,
    downloadFile,
    deleteFile,
    getFilesByUserIdAndParentId,
    getRecentFilesByUserIdAndIterval,
    getHighlightedFilesByUserId,
    getFilesByUserIdAndTypeAndNameAndInterval,
    updateFileToHighlighted,
  }
}

async function createFile(file: FileType): Promise<void> {
  try {
    await fetch(`${API_BASE_URL}files`, {
      method: 'POST',
      body: JSON.stringify(file),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.log(error)
  }
}

async function uploadFile(id: FolderId, path: FolderPath, file: File): Promise<any> {
  try {
    const formData = new FormData()
    formData.append('id', id)
    formData.append('path', path)
    formData.append('file', file)

    const response = await fetch(`${API_BASE_URL}files/upload`, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Error al crear actualizar la imagen del usuario')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error en la solicitud API:', error)
    throw error
  }
}

async function deleteFile(userId: UserId, fileId: FolderId, path: FolderPath): Promise<void> {
  try {
    await fetch(`${API_BASE_URL}files/${userId}/${fileId}/${encodeURIComponent(path)}`, {
      method: 'DELETE',
    })
  } catch (error) {
    console.log(error)
  }
}

async function downloadFile(path: FolderPath, name: FolderName): Promise<any> {
  try {
    const response = await fetch(`${API_BASE_URL}files/download`, {
      method: 'POST',
      body: JSON.stringify({ path, name }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Error al descargar archivo')
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

async function getFilesByUserIdAndParentId(userId: UserId, parentId: FolderId): Promise<FileType[] | undefined> {
  try {
    const response = await fetch(`${API_BASE_URL}files/${userId}/${parentId}`, {
      method: 'GET',
    })

    const files = await response.json()

    return files
  } catch (error) {
    console.log(error)
  }
}

async function getRecentFilesByUserIdAndIterval(userId: UserId, interval: number): Promise<FileType[] | undefined> {
  try {
    const response = await fetch(`${API_BASE_URL}files/recent/${userId}/${interval}`, {
      method: 'GET',
    })

    const files = await response.json()

    return files
  } catch (error) {
    console.log(error)
  }
}

async function getHighlightedFilesByUserId(userId: UserId): Promise<FileType[] | undefined> {
  try {
    const response = await fetch(`${API_BASE_URL}files/highlighted/${userId}`, {
      method: 'GET',
    })

    const files = await response.json()
    return files
  } catch (error) {
    console.log(error)
  }
}

async function getFilesByUserIdAndTypeAndNameAndInterval(
  userId: UserId,
  type: string,
  name: string,
  interval: number
): Promise<FileType[] | undefined> {
  try {
    const response = await fetch(
      `${API_BASE_URL}files/${userId}/${encodeURIComponent(type)}/${encodeURIComponent(name)}/${interval}`,
      {
        method: 'GET',
      }
    )

    const files = await response.json()

    return files
  } catch (error) {
    console.log(error)
  }
}

async function updateFileToHighlighted(userId: UserId, fileId: FolderId, highlighted: number): Promise<void> {
  try {
    await fetch(`${API_BASE_URL}files/highlighted/${userId}/${fileId}/${highlighted}`, {
      method: 'PUT',
    })
  } catch (error) {
    console.log(error)
  }
}
