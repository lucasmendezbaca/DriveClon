const express = require('express')
const PORT = 3000

const app = express()
app.use(express.json())

app.use((request, response) => {
  response.status(404).send('404 Not Found')
})

app.listen(PORT, () => {
  console.log('Server running at port 3000')
})
