const userService = require('../services/userService')

const getUserById = async (request, response) => {
  const id = request.params.id

  try {
    const user = await userService.getUserById(id)
    response.status(200).json(user)
  } catch (err) {
    console.error('Error al obtener el usuario: ' + err.stack)
    response.status(500).send('Error al obtener el usuario')
  }
}

const createNewUser = async (request, response) => {
  const id = request.body.id
  const rootFolderId = request.body.rootFolderId

  try {
    const user = await userService.createNewUser(id, rootFolderId)
    response.status(200).json(user)
  } catch (err) {
    console.error('Error al crear el usuario: ' + err.stack)
    response.status(500).send('Error al crear el usuario')
  }
}

const uploadUserAvatar = async (request, response) => {
  try {
    await userService.uploadUserAvatar(request, response)
  } catch (err) {
    console.error('Error al subir el avatar: ' + err.stack)
    response.status(500).send('Error al subir el avatar controller')
  }
}

module.exports = {
  getUserById,
  createNewUser,
  uploadUserAvatar,
}
