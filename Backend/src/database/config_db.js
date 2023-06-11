const mysql = require('mysql')
const env = require('../env')

const connection = mysql.createConnection(env.CONECTION_OBJECT)

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.stack)
    return
  }

  console.log('Conexión exitosa a la base de datos.')
})

module.exports = connection
