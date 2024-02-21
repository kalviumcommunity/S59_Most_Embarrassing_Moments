const express = require('express')
const app = express()
const port = 3000

app.get('/ping', (req, res) => {
  res.send(`<h1>Let's recall some embarrassing moments !</h1>`)
})

app.listen(port, () => {
  console.log(`The server running on PORT: ${port}`);
});