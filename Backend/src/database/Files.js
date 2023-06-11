const connection = require('./config_db')

const createFile = (id, parentId, userId, name, path, highlighted, type, size, quillData, createDate, updateDate) => {
  return new Promise((resolve, reject) => {
    connection.query(
      'INSERT INTO File (id, parentId, userId, name, path, highlighted, type, size, quillData, createDate, updateDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [id, parentId, userId, name, path, highlighted, type, size, quillData, createDate, updateDate],
      (err, rows) => {
        if (err) {
          reject(err)
        }
        resolve(rows)
      }
    )
  })
}

const getFilesByUserIdAndParentId = (userId, parentId) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM File WHERE userId = ? AND parentId = ?', [userId, parentId], (err, rows) => {
      if (err) {
        reject(err)
      }
      resolve(rows)
    })
  })
}

const getRecentFilesByUserIdAndIterval = (userId, interval) => {
  return new Promise((resolve, reject) => {
    connection.query(
      'SELECT * FROM File WHERE userId = ? AND updateDate BETWEEN DATE_SUB(NOW(), INTERVAL ? DAY) AND NOW()',
      [userId, interval],
      (err, rows) => {
        if (err) {
          reject(err)
        }
        resolve(rows)
      }
    )
  })
}

const getHighlightedFilesByUserId = (userId) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM File WHERE userId = ? AND highlighted = 1', [userId], (err, rows) => {
      if (err) {
        reject(err)
      }
      resolve(rows)
    })
  })
}

const getFilesByUserIdAndTypeAndNameAndInterval = (userId, type, name, interval) => {
  const paramType = type === '~~' ? '' : type
  const paramName = name === '~~' ? '' : name

  return new Promise((resolve, reject) => {
    connection.query(
      'SELECT * FROM File WHERE userId = ? AND type LIKE ? AND name LIKE ? AND updateDate BETWEEN DATE_SUB(NOW(), INTERVAL ? DAY) AND NOW()',
      [userId, `${paramType}%`, `%${paramName}%`, interval],
      (err, rows) => {
        if (err) {
          reject(err)
        }
        resolve(rows)
      }
    )
  })
}

const getSumSizeByUserId = (userId) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT SUM(size) AS sumSize FROM File WHERE userId = ?', [userId], (err, rows) => {
      if (err) {
        reject(err)
      }
      resolve(rows[0].sumSize)
    })
  })
}

const updateFileToHighlightedByUserIdAndId = (userId, id, highlighted) => {
  return new Promise((resolve, reject) => {
    connection.query(
      'UPDATE File SET highlighted = ? WHERE userId = ? AND id = ?',
      [highlighted, userId, id],
      (err, rows) => {
        if (err) {
          reject(err)
        }
        resolve(rows)
      }
    )
  })
}

const deleteFileByUserIdAndId = (userId, id) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM File WHERE userId = ? AND id = ?', [userId, id], (err, rows) => {
      if (err) {
        reject(err)
      }
      resolve(rows)
    })
  })
}

module.exports = {
  createFile,
  getFilesByUserIdAndParentId,
  getRecentFilesByUserIdAndIterval,
  getHighlightedFilesByUserId,
  getFilesByUserIdAndTypeAndNameAndInterval,
  getSumSizeByUserId,
  updateFileToHighlightedByUserIdAndId,
  deleteFileByUserIdAndId,
}
