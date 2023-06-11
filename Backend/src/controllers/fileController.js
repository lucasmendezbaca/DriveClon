const fileService = require('../services/fileService')
const multer = require('multer')
const fs = require('fs')
const env = require('../env')

const uploadFile = (request, response) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const path = request.body.path
      const pathWithoutHost = path.replace(env.BASE_URL, '')
      cb(null, pathWithoutHost)
    },
    filename: (req, file, cb) => {
      const id = request.body.id
      const extension = file.originalname.split('.').pop()
      cb(null, `${id}.${extension}`)
    },
  })

  const upload = multer({ storage }).single('file')

  upload(request, response, (err) => {
    if (err) {
      console.error('Error al subir el archivo: ' + err.stack)
      response.status(500).send('Error al subir el archivo database')
    }
    console.log(request.file)
    response.status(200).send(request.file)
  })
}

const downloadFile = (request, response) => {
  const { path, name } = request.body
  const pathWithoutHost = path.replace(env.BASE_URL, '')

  try {
    response.set('Content-Disposition', 'attachment')
    response.download(pathWithoutHost, name)
    console.log('Archivo descargado correctamente')
  } catch (err) {
    console.error(err)
    response.status(500).send('Error al descargar el archivo controller')
  }
}

const createFile = (request, response) => {
  const { id, parentId, userId, name, path, highlighted, type, size, quillData, createDate, updateDate } = request.body

  try {
    fileService.createFile(id, parentId, userId, name, path, highlighted, type, size, quillData, createDate, updateDate)
    response.status(200).send('Archivo creado correctamente')
  } catch (err) {
    console.error(err)
    response.status(500).send('Error al crear el archivo controller')
  }
}

const getFilesByUserIdAndParentId = async (request, response) => {
  const { userId, parentId } = request.params

  try {
    const files = await fileService.getFilesByUserIdAndParentId(userId, parentId)
    response.status(200).send(files)
  } catch (err) {
    console.error(err)
    response.status(500).send('Error al obtener los archivos controller')
  }
}

const getRecentFilesByUserIdAndIterval = async (request, response) => {
  const { userId, interval } = request.params

  try {
    const files = await fileService.getRecentFilesByUserIdAndIterval(userId, interval)
    response.status(200).send(files)
  } catch (err) {
    console.error(err)
    response.status(500).send('Error al obtener los archivos recientes controller')
  }
}

const getHighlightedFilesByUserId = async (request, response) => {
  const { userId } = request.params
  try {
    const files = await fileService.getHighlightedFilesByUserId(userId)
    response.status(200).send(files)
  } catch (err) {
    console.error(err)
    response.status(500).send('Error al obtener los archivos destacados controller')
  }
}

const getFilesByUserIdAndTypeAndNameAndInterval = async (request, response) => {
  const { userId, type, name, interval } = request.params
  let decodedType = decodeURIComponent(type)
  let decodedName = decodeURIComponent(name)

  decodedType = decodedType === ' ' ? '' : decodedType
  decodedName = decodedName === ' ' ? '' : decodedName

  try {
    const files = await fileService.getFilesByUserIdAndTypeAndNameAndInterval(
      userId,
      decodedType,
      decodedName,
      interval
    )
    response.status(200).send(files)
  } catch (err) {
    console.error(err)
    response.status(500).send('Error al obtener los archivos por tipo y nombre controller')
  }
}

const getSumSizeByUserId = async (request, response) => {
  const { userId } = request.params

  try {
    const sumSize = await fileService.getSumSizeByUserId(userId)
    response.status(200).send(sumSize)
  } catch (err) {
    console.error(err)
    response.status(500).send('Error al obtener la suma de los tamaños de los archivos controller')
  }
}

const updateFileToHighlightedByUserIdAndId = (request, response) => {
  const { userId, id, highlighted } = request.params

  try {
    fileService.updateFileToHighlightedByUserIdAndId(userId, id, highlighted)
    response.status(200).send('Archivo actualizado correctamente')
  } catch (err) {
    console.error(err)
    response.status(500).send('Error al actualizar el archivo controller')
  }
}

const deleteFileByUserIdAndId = (request, response) => {
  const { userId, id, path } = request.params
  const decodedPath = decodeURIComponent(path)
  console.log(decodedPath)

  try {
    fileService.deleteFileByUserIdAndId(userId, id)
    const pathWithoutHost = decodedPath.replace(env.BASE_URL, '')
    fs.unlinkSync(pathWithoutHost)

    response.status(200).send('Archivo eliminado correctamente')
  } catch (err) {
    console.error(err)
    response.status(500).send('Error al eliminar el archivo controller')
  }
}

module.exports = {
  createFile,
  uploadFile,
  downloadFile,
  getFilesByUserIdAndParentId,
  getRecentFilesByUserIdAndIterval,
  getHighlightedFilesByUserId,
  getFilesByUserIdAndTypeAndNameAndInterval,
  getSumSizeByUserId,
  updateFileToHighlightedByUserIdAndId,
  deleteFileByUserIdAndId,
}
