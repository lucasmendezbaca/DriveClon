const connection = require('./config_db')

const getItemsByParentId = (userId, parentId) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM item WHERE userId = ? AND parentId = ?', [userId, parentId], (err, rows) => {
      if (err) {
        reject(err)
      }
      resolve(rows)
    })
  })
}

const createNewItem = (id, parentId, userId, name, description, type, content, updateDate, createDate) => {
  return new Promise((resolve, reject) => {
    connection.query(
      'INSERT INTO item (id, parentId, userId, name, description, type, content, updateDate, createDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [id, parentId, userId, name, description, type, content, updateDate, createDate],
      (err, rows) => {
        if (err) {
          reject(err)
        }
        resolve(rows)
      }
    )
  })
}

module.exports = {
  getItemsByParentId,
  createNewItem,
}
