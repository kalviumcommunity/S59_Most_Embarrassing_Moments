const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8080

const connection = require('./db')

const connectToDataBase = async () => {
  try {
    await connection
    console.log("Mongo DB has successfully connected")
  }
  catch (err) {
    console.log("There was an error while connecting to Mongo DB", err.message)
  }
}

app.get('/ping', (req, res) => {
  res.send(`<h1>Let's recall some embarrassing moments !</h1>`)
})

app.get('/', (req, res) => {
  const status = mongoose.connection.readyState == 1 ? 'Connected 😎😎' : 'Disconnected 😓😓'
  res.send(`Your DataBase connection status is: ${status}`)
})

app.listen(port, async () => {
  await connectToDataBase()
  console.log(`The server running on PORT: ${port}`)
})
