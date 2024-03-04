const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const routes = require('./routes')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/moments', routes)


app.get('/ping', (req, res) => {
  res.send(`<h1>Let's recall some embarrassing moments !</h1>`)
})

app.get('/', (req, res) => {
  const status = mongoose.connection.readyState == 1 ? 'Connected 😎😎' : 'Disconnected 😓😓'
  res.send(`Your DataBase connection status is: ${status}`)
})

app.listen(port, async () => {
  // await connectToDataBase()
  console.log(`The server running on PORT: ${port}`)
})

// module.exports =  { connectToDataBase } 