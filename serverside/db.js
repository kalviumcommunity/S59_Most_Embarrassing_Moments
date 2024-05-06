const mongoose = require('mongoose')
require('dotenv').config();
const connection = mongoose.connect(`${process.env.URI}`)

const connectToDataBase = async () => {
    try {
      await connection
      console.log("Mongo DB has successfully connected")
    }
    catch (err) {
      console.log("There was an error while connecting to Mongo DB", err.message)
    }
  }

module.exports = { connectToDataBase }