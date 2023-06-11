const Users = require('../database/Users')

const getUserById = (id) => {
  try {
    return Users.getUserById(id)
  } catch (err) {
    console.error('Error al obtener el usuario: ' + err.stack)
    throw err
  }
}

const createNewUser = (id, rootFolderId) => {
  try {
    return Users.createNewUser(id, rootFolderId)
  } catch (err) {
    console.error('Error al crear el usuario: ' + err.stack)
    throw err
  }
}

const uploadUserAvatar = (request, response) => {
  try {
    return Users.uploadUserAvatar(request, response)
  } catch (err) {
    console.error('Error al subir el avatar service: ' + err.stack)
    throw err
  }
}

module.exports = {
  getUserById,
  createNewUser,
  uploadUserAvatar,
}
