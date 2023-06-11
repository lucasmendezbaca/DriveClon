const connection = require('./config_db')
const multer = require('multer')

const getUserRootFolderByUserId = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT rootFolderId FROM user WHERE id = ?', [id], (err, rows) => {
      if (err) {
        reject(err)
      }
      resolve(rows[0].rootFolderId)
    })
  })
}

const createNewUser = (id, rootFolderId) => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO user (id, rootFolderId) VALUES (?, ?)', [id, rootFolderId], (err, rows) => {
      if (err) {
        reject(err)
      }
      resolve(rows)
    })
  })
}

const uploadUserAvatar = (request, response) => {
  const id = request.params.id

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads/avatars')
    },
    filename: (req, file, cb) => {
      const extension = file.originalname.split('.').pop()
      cb(null, `${id}.${extension}`)
    },
  })

  const upload = multer({ storage }).single('avatar')

  upload(request, response, (err) => {
    if (err) {
      console.error('Error al subir el avatar: ' + err.stack)
      response.status(500).send('Error al subir el avatar database')
    }
    console.log(request.file)
    response.status(200).send('Avatar subido correctamente')
  })
}

module.exports = {
  getUserById: getUserRootFolderByUserId,
  createNewUser,
  uploadUserAvatar,
}
