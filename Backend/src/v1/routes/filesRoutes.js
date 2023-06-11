const express = require('express')
const fileController = require('../../controllers/fileController')

const router = express.Router()

/**
 * @openapi
 * /api/v1/files/highlighted/{userId}:
 *   get:
 *     tags:
 *       - Files
 *     summary: Get highlighted files by user ID
 *     parameters:
 *       - in: path
 *         name: userId
 *         description: User ID
 *         required: true
 *         schema:
 *           type: string
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
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: file1
 *                       name:
 *                         type: string
 *                         example: File 1
 *                       userId:
 *                         type: string
 *                         example: user1
 *                       highlighted:
 *                         type: boolean
 *                         example: true
 */

/**
 * @openapi
 * /api/v1/files/{userId}/{type}/{name}/{interval}:
 *   get:
 *     tags:
 *       - Files
 *     summary: Get files by user ID, type, name, and interval
 *     parameters:
 *       - in: path
 *         name: userId
 *         description: User ID
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: type
 *         description: File type
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: name
 *         description: File name
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: interval
 *         description: Time interval
 *         required: true
 *         schema:
 *           type: string
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
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: file1
 *                       name:
 *                         type: string
 *                         example: File 1
 *                       userId:
 *                         type: string
 *                         example: user1
 *                       type:
 *                         type: string
 *                         example: image
 *                       interval:
 *                         type: string
 *                         example: last_week
 */

/**
 * @openapi
 * /api/v1/files/{userId}/{parentId}:
 *   get:
 *     tags:
 *       - Files
 *     summary: Get files by user ID and parent ID
 *     parameters:
 *       - in: path
 *         name: userId
 *         description: User ID
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: parentId
 *         description: Parent ID
 *         required: true
 *         schema:
 *           type: string
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
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: file1
 *                       name:
 *                         type: string
 *                         example: File 1
 *                       userId:
 *                         type: string
 *                         example: user1
 *                       parentId:
 *                         type: string
 *                         example: parent1
 */

/**
 * @openapi
 * /api/v1/files/recent/{userId}/{interval}:
 *   get:
 *     tags:
 *       - Files
 *     summary: Get recent files by user ID and interval
 *     parameters:
 *       - in: path
 *         name: userId
 *         description: User ID
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: interval
 *         description: Time interval
 *         required: true
 *         schema:
 *           type: string
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
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: file1
 *                       name:
 *                         type: string
 *                         example: File 1
 *                       userId:
 *                         type: string
 *                         example: user1
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: 2023-06-12T10:00:00Z
 */

/**
 * @openapi
 * /api/v1/files/sumsize/{userId}:
 *   get:
 *     tags:
 *       - Files
 *     summary: Get the sum of file sizes by user ID
 *     parameters:
 *       - in: path
 *         name: userId
 *         description: User ID
 *         required: true
 *         schema:
 *           type: string
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
 *                     sumSize:
 *                       type: number
 *                       example: 1024
 */

/**
 * @openapi
 * /api/v1/files:
 *   post:
 *     tags:
 *       - Files
 *     summary: Create a new file
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 example: user1
 *               name:
 *                 type: string
 *                 example: MyFile.txt
 *               content:
 *                 type: string
 *                 example: File content
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
 *                     id:
 *                       type: string
 *                       example: file1
 *                     name:
 *                       type: string
 *                       example: MyFile.txt
 *                     userId:
 *                       type: string
 *                       example: user1
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: 2023-06-12T10:00:00Z
 */

/**
 * @openapi
 * /api/v1/files/upload:
 *   post:
 *     tags:
 *       - Files
 *     summary: Upload a file
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
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
 *                     id:
 *                       type: string
 *                       example: file1
 *                     name:
 *                       type: string
 *                       example: MyFile.txt
 *                     userId:
 *                       type: string
 *                       example: user1
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: 2023-06-12T10:00:00Z
 */

/**
 * @openapi
 * /api/v1/files/download:
 *   post:
 *     tags:
 *       - Files
 *     summary: Download a file
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fileId:
 *                 type: string
 *                 example: file1
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/octet-stream:
 *             schema:
 *               type: string
 *               format: binary
 */

/**
 * @openapi
 * /api/v1/files/highlighted/{userId}/{id}/{highlighted}:
 *   put:
 *     tags:
 *       - Files
 *     summary: Update file to highlighted by user ID and ID
 *     parameters:
 *       - in: path
 *         name: userId
 *         description: User ID
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         description: File ID
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: highlighted
 *         description: Highlighted status (true or false)
 *         required: true
 *         schema:
 *           type: boolean
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
 *                     id:
 *                       type: string
 *                       example: file1
 *                     name:
 *                       type: string
 *                       example: MyFile.txt
 *                     userId:
 *                       type: string
 *                       example: user1
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: 2023-06-12T10:00:00Z
 *                     highlighted:
 *                       type: boolean
 *                       example: true
 */

/**
 * @openapi
 * /api/v1/files/{userId}/{id}/{path}:
 *   delete:
 *     tags:
 *       - Files
 *     summary: Delete file by user ID, ID, and path
 *     parameters:
 *       - in: path
 *         name: userId
 *         description: User ID
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         description: File ID
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: path
 *         description: File path
 *         required: true
 *         schema:
 *           type: string
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
 *                     id:
 *                       type: string
 *                       example: file1
 *                     name:
 *                       type: string
 *                       example: MyFile.txt
 *                     userId:
 *                       type: string
 *                       example: user1
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: 2023-06-12T10:00:00Z
 */

router
  .get('/highlighted/:userId', fileController.getHighlightedFilesByUserId)
  .get('/:userId/:type/:name/:interval', fileController.getFilesByUserIdAndTypeAndNameAndInterval)
  .get('/:userId/:parentId', fileController.getFilesByUserIdAndParentId)
  .get('/recent/:userId/:interval', fileController.getRecentFilesByUserIdAndIterval)
  .get('/sumsize/:userId', fileController.getSumSizeByUserId)
  .post('/', fileController.createFile)
  .post('/upload', fileController.uploadFile)
  .post('/download', fileController.downloadFile)
  .put('/highlighted/:userId/:id/:highlighted', fileController.updateFileToHighlightedByUserIdAndId)
  .delete('/:userId/:id/:path', fileController.deleteFileByUserIdAndId)

module.exports = router
