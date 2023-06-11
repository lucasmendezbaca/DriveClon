const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 's281656_itemsUser',
  password: 'itemsUser.password',
  database: 's281656_items',
})

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'items',
// })

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.stack)
    return
  }

  console.log('Conexión exitosa a la base de datos.')
})

module.exports = connection
