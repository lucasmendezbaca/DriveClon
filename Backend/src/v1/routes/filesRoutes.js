const express = require('express')
const fileController = require('../../controllers/fileController')

const router = express.Router()

router
  .get('/highlighted/:userId', fileController.getHighlightedFilesByUserId)
  .get('/:userId/:type/:name/:interval', fileController.getFilesByUserIdAndTypeAndNameAndInterval)
  .get('/:userId/:parentId', fileController.getFilesByUserIdAndParentId)
  .get('/recent/:userId/:interval', fileController.getRecentFilesByUserIdAndIterval)
  .post('/', fileController.createFile)
  .post('/upload', fileController.uploadFile)
  .post('/download', fileController.downloadFile)
  .put('/highlighted/:userId/:id/:highlighted', fileController.updateFileToHighlightedByUserIdAndId)
  .delete('/:userId/:id/:path', fileController.deleteFileByUserIdAndId)

module.exports = router
