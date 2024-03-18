const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const routes = require('./routes/routes')
const blog_route = require('./routes/blog-routes')
const user_route = require('./routes/user-routes')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use('/blog', blog_route)
app.use('/moments', routes)
app.use('/user', user_route)

app.get('/', (req, res) => {
  const status = mongoose.connection.readyState == 1 ? 'Connected 😎😎' : 'Disconnected 😓😓'
  res.send(`Your DataBase connection status is: ${status}`)
})

app.listen(port, async () => {
  // await connectToDataBase()
  console.log(`The server running on PORT: ${port}`)
})

// module.exports =  { connectToDataBase } 