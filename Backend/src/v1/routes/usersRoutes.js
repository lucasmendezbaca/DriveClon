const express = require('express')
// const multer = require('multer')
// const upload = multer({ dest: './uploads/avatars' })

const userController = require('../../controllers/userController')

const router = express.Router()

/**
 * @openapi
 * /api/v1/users/upload-avatar/{id}:
 *   post:
 *     tags:
 *       - Users
 *     summary: Uploads a user avatar
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User ID
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               avatar:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: Avatar uploaded successfully
 *                     avatarUrl:
 *                       type: string
 *                       example: https://example.com/avatar.jpg
 */

router
  // .get('/:id', userController.getUserById)
  // .post('/', userController.createNewUser)
  .post('/upload-avatar/:id', userController.uploadUserAvatar)
//   .post('/upload-avatar', userController.uploadUserAvatar)
//   .post('/upload-avatar', upload.single('diploma'), userController.uploadUserAvatar)

module.exports = router
