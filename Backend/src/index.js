const express = require('express')
const v1ItemRouter = require('./v1/routes/itemsRoutes')
const v1UserRouter = require('./v1/routes/usersRoutes')
const v1FolderRouter = require('./v1/routes/foldersRoutes')
const v1FileRouter = require('./v1/routes/filesRoutes')

const app = express()
const PORT = 3000
const BASE_URL = 'https://driveclone.es'
// const BASE_URL = 'http://localhost:5173'

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', BASE_URL)
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
//   )
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
//   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
//   next()
// })

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', BASE_URL)
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')

  // Manejar las solicitudes OPTIONS
  if (req.method === 'OPTIONS') {
    res.status(200).end()
  } else {
    next()
  }
})

app.use((req, res, next) => {
  res.set('Content-Disposition', 'inline')
  next()
})
app.use(express.json())
app.use('/api/v1/items', v1ItemRouter)
app.use('/api/v1/users', v1UserRouter)
app.use('/api/v1/folders', v1FolderRouter)
app.use('/api/v1/files', v1FileRouter)

// servir archivos estáticos
app.use('/uploads', express.static('uploads'))

app.use((request, response) => {
  response.status(404).send('404 Not Found')
})

app.listen(PORT, () => {
  console.log('Server running at port 3000')
})
