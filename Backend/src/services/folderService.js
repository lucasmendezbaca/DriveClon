const Folders = require('../database/Folders')

const createRootFolder = (id, userId, name, path, highlighted, createDate, updateDate) => {
  try {
    return Folders.createRootFolder(id, userId, name, path, highlighted, createDate, updateDate)
  } catch (err) {
    console.error('Error al crear la carpeta raíz: ' + err.stack)
    throw err
  }
}

const createFolder = (id, parentId, userId, name, path, highlighted, createDate, updateDate) => {
  try {
    return Folders.createFolder(id, parentId, userId, name, path, highlighted, createDate, updateDate)
  } catch (err) {
    console.error('Error al crear la carpeta: ' + err.stack)
    throw err
  }
}

const getFoldersByUserIdAndParentId = (userId, parentId) => {
  try {
    return Folders.getFoldersByUserIdAndParentId(userId, parentId)
  } catch (err) {
    console.error('Error al obtener las carpetas: ' + err.stack)
    throw err
  }
}

const getFolderByUserIdAndId = (userId, id) => {
  try {
    return Folders.getFolderByUserIdAndId(userId, id)
  } catch (err) {
    console.error('Error al obtener la carpeta: ' + err.stack)
    throw err
  }
}

const deleteFolderByUserIdAndId = (userId, id) => {
  try {
    return Folders.deleteFolderByUserIdAndId(userId, id)
  } catch (err) {
    console.error('Error al eliminar la carpeta: ' + err.stack)
    throw err
  }
}

const deleteItemsByUserIdAndItems = (userId, items) => {
  try {
    return Folders.deleteItemsByUserIdAndItems(userId, items)
  } catch (err) {
    console.error('Error al eliminar las carpetas: ' + err.stack)
    throw err
  }
}

module.exports = {
  createRootFolder,
  createFolder,
  getFoldersByUserIdAndParentId,
  getFolderByUserIdAndId,
  deleteFolderByUserIdAndId,
  deleteItemsByUserIdAndItems,
}
