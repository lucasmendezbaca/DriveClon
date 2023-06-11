const Files = require('../database/Files')

const createFile = (id, parentId, userId, name, path, highlighted, type, size, quillData, createDate, updateDate) => {
  try {
    return Files.createFile(
      id,
      parentId,
      userId,
      name,
      path,
      highlighted,
      type,
      size,
      quillData,
      createDate,
      updateDate
    )
  } catch (err) {
    console.error(err)
    throw new Error('Error al crear el archivo service')
  }
}

const getFilesByUserIdAndParentId = (userId, parentId) => {
  try {
    return Files.getFilesByUserIdAndParentId(userId, parentId)
  } catch (err) {
    console.error(err)
    throw new Error('Error al obtener los archivos service')
  }
}

const getRecentFilesByUserIdAndIterval = (userId, interval) => {
  try {
    return Files.getRecentFilesByUserIdAndIterval(userId, interval)
  } catch (err) {
    console.error(err)
    throw new Error('Error al obtener los archivos recientes service')
  }
}

const getHighlightedFilesByUserId = (userId) => {
  try {
    return Files.getHighlightedFilesByUserId(userId)
  } catch (err) {
    console.error(err)
    throw new Error('Error al obtener los archivos destacados service')
  }
}

const getFilesByUserIdAndTypeAndNameAndInterval = (userId, type, name, interval) => {
  try {
    return Files.getFilesByUserIdAndTypeAndNameAndInterval(userId, type, name, interval)
  } catch (err) {
    console.error(err)
    throw new Error('Error al obtener los archivos por tipo, nombre e intervalo service')
  }
}

const getSumSizeByUserId = (userId) => {
  try {
    return Files.getSumSizeByUserId(userId)
  } catch (err) {
    console.error(err)
    throw new Error('Error al obtener la suma de los tamaños de los archivos service')
  }
}

const updateFileToHighlightedByUserIdAndId = (userId, id, highlighted) => {
  try {
    return Files.updateFileToHighlightedByUserIdAndId(userId, id, highlighted)
  } catch (err) {
    console.error(err)
    throw new Error('Error al actualizar el archivo a destacado service')
  }
}

const deleteFileByUserIdAndId = (userId, id) => {
  try {
    return Files.deleteFileByUserIdAndId(userId, id)
  } catch (err) {
    console.error(err)
    throw new Error('Error al eliminar el archivo service')
  }
}

module.exports = {
  createFile,
  getFilesByUserIdAndParentId,
  getRecentFilesByUserIdAndIterval,
  getHighlightedFilesByUserId,
  getFilesByUserIdAndTypeAndNameAndInterval,
  getSumSizeByUserId,
  updateFileToHighlightedByUserIdAndId,
  deleteFileByUserIdAndId,
}
