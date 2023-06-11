const express = require('express')
// const multer = require('multer')
// const upload = multer({ dest: './uploads/avatars' })

const userController = require('../../controllers/userController')

const router = express.Router()

router
  .get('/:id', userController.getUserById)
  .post('/', userController.createNewUser)
  .post('/upload-avatar/:id', userController.uploadUserAvatar)
//   .post('/upload-avatar', userController.uploadUserAvatar)
//   .post('/upload-avatar', upload.single('diploma'), userController.uploadUserAvatar)

module.exports = router
