const folderService = require('../services/folderService')
const fs = require('fs')
const archiver = require('archiver')

const createRootFolder = async (req, res) => {
  console.log(req.body)
  const { id, userId, name, path, highlighted, createDate, updateDate } = req.body
  try {
    const result = await folderService.createRootFolder(id, userId, name, path, highlighted, createDate, updateDate)

    try {
      fs.mkdirSync(`./uploads/items/${id}`)
      console.log('Carpeta creada correctamente.')
    } catch (err) {
      console.log('Error al crear la carpeta.')
      console.error(err)
    }

    res.status(201).send(result)
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
}

const createFolder = async (req, res) => {
  const { id, parentId, userId, name, path, highlighted, createDate, updateDate } = req.body
  try {
    const result = await folderService.createFolder(
      id,
      parentId,
      userId,
      name,
      path,
      highlighted,
      createDate,
      updateDate
    )

    // const pathWithoutHost = path.replace('http://localhost:3000/', '')
    const pathWithoutHost = path.replace('https://driveclone.es/', '')
    try {
      fs.mkdirSync(pathWithoutHost)
      console.log('Carpeta creada correctamente.')
    } catch (err) {
      console.log('Error al crear la carpeta.')
      console.error(err)
    }

    res.status(201).send(result)
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
}

const downloadFolder = (request, response) => {
  const { path, name } = request.body
  // const pathWithoutHost = path.replace('http://localhost:3000/', '')
  const pathWithoutHost = path.replace('https://driveclone.es/', '')

  try {
    const zipFileName = `${name}.zip`
    const output = fs.createWriteStream(zipFileName)
    const archive = archiver('zip', { zlib: { level: 9 } })

    output.on('close', () => {
      console.log('Carpeta descargada correctamente')
      response.set('Content-Disposition', 'attachment')
      response.download(zipFileName)
    })

    archive.on('warning', (err) => {
      if (err.code === 'ENOENT') {
        console.warn(err)
      } else {
        throw err
      }
    })

    archive.on('error', (err) => {
      console.error(err)
      response.status(500).send('Error al descargar la carpeta')
    })

    archive.pipe(output)
    archive.directory(pathWithoutHost, false)
    archive.finalize()
  } catch (err) {
    console.error(err)
    response.status(500).send('Error al descargar la carpeta')
  }
}

const getFoldersByUserIdAndParentId = async (req, res) => {
  const { userId, parentId } = req.params
  try {
    const result = await folderService.getFoldersByUserIdAndParentId(userId, parentId)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
}

const getFolderByUserIdAndId = async (req, res) => {
  const { userId, id } = req.params
  try {
    const result = await folderService.getFolderByUserIdAndId(userId, id)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
}

const deleteFolderByUserIdAndId = async (req, res) => {
  const { userId, id, path } = req.params
  const decodedPath = decodeURIComponent(path)
  try {
    const result = await folderService.deleteFolderByUserIdAndId(userId, id)
    try {
      // const pathWithoutHost = decodedPath.replace('http://localhost:3000/', '')
      const pathWithoutHost = decodedPath.replace('https://driveclone.es/', '')
      fs.rmdirSync(pathWithoutHost)
      console.log('Carpeta eliminada correctamente.')
    } catch (err) {
      console.log('Error al eliminar la carpeta.')
      console.error(err)
    }
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
}

module.exports = {
  createRootFolder,
  createFolder,
  getFoldersByUserIdAndParentId,
  downloadFolder,
  getFolderByUserIdAndId,
  deleteFolderByUserIdAndId,
}
