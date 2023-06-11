const itemService = require('../services/itemService')

const getItemsByParentId = async (request, response) => {
  const userId = request.params.userId
  const parentId = request.params.parentId

  try {
    const items = await itemService.getItemsByParentId(userId, parentId)
    response.status(200).json(items)
  } catch (err) {
    console.error('Error al obtener los items: ' + err.stack)
    response.status(500).send('Error al obtener los items')
  }
}

const createNewItem = async (request, response) => {
  console.log(request.body)
  const id = request.body.id
  const parentId = request.body.parentId
  const userId = request.body.userId
  const name = request.body.name
  const description = request.body.description
  const type = request.body.type
  const content = request.body.content
  const updateDate = request.body.updateDate
  const createDate = request.body.createDate

  try {
    const item = await itemService.createNewItem(
      id,
      parentId,
      userId,
      name,
      description,
      type,
      content,
      updateDate,
      createDate
    )
    response.status(200).json(item)
  } catch (err) {
    console.error('Error al crear el item: ' + err.stack)
    response.status(500).send('Error al crear el item')
  }
}

module.exports = {
  getItemsByParentId,
  createNewItem,
}
