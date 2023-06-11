const express = require('express')
const folderController = require('../../controllers/folderController')

const router = express.Router()
/**
 * @openapi
 * /api/v1/folders/{userId}/{parentId}:
 *   get:
 *     tags:
 *       - Folders
 *     summary: Get folders by user ID and parent ID
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
 *                         example: folder1
 *                       name:
 *                         type: string
 *                         example: Folder 1
 *                       parentId:
 *                         type: string
 *                         example: root
 *                       userId:
 *                         type: string
 *                         example: user1
 */

/**
 * @openapi
 * /api/v1/folders/folder/{userId}/{id}:
 *   get:
 *     tags:
 *       - Folders
 *     summary: Get folder by user ID and folder ID
 *     parameters:
 *       - in: path
 *         name: userId
 *         description: User ID
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         description: Folder ID
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
 *                       example: folder1
 *                     name:
 *                       type: string
 *                       example: Folder 1
 *                     parentId:
 *                       type: string
 *                       example: root
 *                     userId:
 *                       type: string
 *                       example: user1
 */

/**
 * @openapi
 * /api/v1/folders/:
 *   post:
 *     tags:
 *       - Folders
 *     summary: Create a new folder
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: New Folder
 *               parentId:
 *                 type: string
 *                 example: root
 *               userId:
 *                 type: string
 *                 example: user1
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Created
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: folder1
 *                     name:
 *                       type: string
 *                       example: New Folder
 *                     parentId:
 *                       type: string
 *                       example: root
 *                     userId:
 *                       type: string
 *                       example: user1
 */

/**
 * @openapi
 * /api/v1/folders/root:
 *   post:
 *     tags:
 *       - Folders
 *     summary: Create a root folder
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Root Folder
 *               userId:
 *                 type: string
 *                 example: user1
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Created
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: folder1
 *                     name:
 *                       type: string
 *                       example: Root Folder
 *                     parentId:
 *                       type: string
 *                       example: null
 *                     userId:
 *                       type: string
 *                       example: user1
 */

/**
 * @openapi
 * /api/v1/folders/download:
 *   post:
 *     tags:
 *       - Folders
 *     summary: Download a folder
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               folderId:
 *                 type: string
 *                 example: folder1
 *               userId:
 *                 type: string
 *                 example: user1
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/octet-stream:
 *             schema:
 *               type: string
 *               format: binary
 *               example: [folder binary data]
 */

/**
 * @openapi
 * /api/v1/folders/deleteitems/{userId}:
 *   post:
 *     tags:
 *       - Folders
 *     summary: Delete items by user ID and items
 *     parameters:
 *       - in: path
 *         name: userId
 *         description: User ID
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 itemId:
 *                   type: string
 *                   description: Item ID
 *                 itemType:
 *                   type: string
 *                   description: Item type
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
 *                     deletedItems:
 *                       type: array
 *                       items:
 *                         type: string
 *                       example: [item1, item2]
 */

/**
 * @openapi
 * /api/v1/folders/{userId}/{id}/{path}:
 *   delete:
 *     tags:
 *       - Folders
 *     summary: Delete a folder by user ID, folder ID, and path
 *     parameters:
 *       - in: path
 *         name: userId
 *         description: User ID
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         description: Folder ID
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: path
 *         description: Folder path
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
 *                 message:
 *                   type: string
 *                   example: Folder deleted successfully
 */

router
  .get('/:userId/:parentId', folderController.getFoldersByUserIdAndParentId)
  .get('/folder/:userId/:id', folderController.getFolderByUserIdAndId)
  .post('/', folderController.createFolder)
  .post('/root', folderController.createRootFolder)
  .post('/download', folderController.downloadFolder)
  .post('/deleteitems/:userId', folderController.deleteItemsByUserIdAndItems)
  .delete('/:userId/:id/:path', folderController.deleteFolderByUserIdAndId)

module.exports = router
