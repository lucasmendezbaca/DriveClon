const Items = require('../database/Items')

const getItemsByParentId = (userId, parentId) => {
  try {
    return Items.getItemsByParentId(userId, parentId)
  } catch (err) {
    console.error('Error al obtener los items: ' + err.stack)
    throw err
  }
}

const createNewItem = (id, parentId, userId, name, description, type, content, updateDate, createDate) => {
  try {
    return Items.createNewItem(id, parentId, userId, name, description, type, content, updateDate, createDate)
  } catch (err) {
    console.error('Error al crear el item: ' + err.stack)
    throw err
  }
}

module.exports = {
  getItemsByParentId,
  createNewItem,
}
