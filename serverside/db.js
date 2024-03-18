const mongoose = require('mongoose')
require('dotenv').config();
const connection = mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASS}@most-embarrassing-momen.cztr4fc.mongodb.net/data?retryWrites=true&w=majority&appName=Most-Embarrassing-Moments`)

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