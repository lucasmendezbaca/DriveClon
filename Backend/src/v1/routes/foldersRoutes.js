const express = require('express')
const folderController = require('../../controllers/folderController')

const router = express.Router()

router
  .get('/:userId/:parentId', folderController.getFoldersByUserIdAndParentId)
  .get('/folder/:userId/:id', folderController.getFolderByUserIdAndId)
  .post('/', folderController.createFolder)
  .post('/root', folderController.createRootFolder)
  .post('/download', folderController.downloadFolder)
  .delete('/:userId/:id/:path', folderController.deleteFolderByUserIdAndId)

module.exports = router
