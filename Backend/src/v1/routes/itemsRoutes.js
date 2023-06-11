const express = require('express')
const itemController = require('../../controllers/itemController')

const router = express.Router()

router.get('/:userId/:parentId', itemController.getItemsByParentId).post('/', itemController.createNewItem)

module.exports = router
