const express = require('express')
const path = require('path')
const v1ItemRouter = require('./v1/routes/itemsRoutes')
const v1UserRouter = require('./v1/routes/usersRoutes')
const v1FolderRouter = require('./v1/routes/foldersRoutes')
const v1FileRouter = require('./v1/routes/filesRoutes')
const env = require('./env')

const { swaggerDocs: V1SwaggerDocs } = require('./v1/swagger')

const app = express()
const PORT = 3000

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', env.ALLOW_REQUESTS)
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')

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

app.use('/uploads', express.static('uploads'))

app.listen(PORT, () => {
  console.log('Server running at port 3000')
  V1SwaggerDocs(app, PORT)

  app.use((req, res, next) => {
    if (req.path === '/api/v1/docs/') {
      next()
    } else {
      // res.status(404).send('Error 404 - Página no encontrada')
      // const indexHtml = path.join(__dirname, '../public_html/index.html')
      const indexHtml = path.join(__dirname, '../../public_html/index.html')
      console.log(__dirname)
      console.log(indexHtml)
      res.sendFile(indexHtml)
    }
  })
})

// app.use((request, response) => {
//   console.log('entra en el 404')
//   response.status(404).send('404 Not Found')
// })
