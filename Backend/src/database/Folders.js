const connection = require('./config_db')

const createRootFolder = (id, userId, name, path, highlighted, createDate, updateDate) => {
  return new Promise((resolve, reject) => {
    connection.query(
      'INSERT INTO Folder (id, userId, name, path, highlighted, createDate, updateDate) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [id, userId, name, path, highlighted, createDate, updateDate],
      (err, rows) => {
        if (err) {
          console.error('Falla al hacer el insert')
          reject(err)
        }
        resolve(rows)
      }
    )
  })
}

const createFolder = (id, parentId, userId, name, path, highlighted, createDate, updateDate) => {
  return new Promise((resolve, reject) => {
    connection.query(
      'INSERT INTO Folder (id, parentId, userId, name, path, highlighted, createDate, updateDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [id, parentId, userId, name, path, highlighted, createDate, updateDate],
      (err, rows) => {
        if (err) {
          reject(err)
        }
        resolve(rows)
      }
    )
  })
}

const getFoldersByUserIdAndParentId = (userId, parentId) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Folder WHERE userId = ? AND parentId = ?', [userId, parentId], (err, rows) => {
      if (err) {
        reject(err)
      }
      resolve(rows)
    })
  })
}

const getFolderByUserIdAndId = (userId, id) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Folder WHERE userId = ? AND id = ?', [userId, id], (err, rows) => {
      if (err) {
        reject(err)
      }
      resolve(rows)
    })
  })
}

const deleteFolderByUserIdAndId = (userId, id) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM Folder WHERE userId = ? AND id = ?', [userId, id], (err, rows) => {
      if (err) {
        reject(err)
      }
      resolve(rows)
    })
  })
}

module.exports = {
  createRootFolder,
  createFolder,
  getFoldersByUserIdAndParentId,
  getFolderByUserIdAndId,
  deleteFolderByUserIdAndId,
}
