const mongoose = require('mongoose')
require('dotenv').config();
const connection = mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASS}@most-embarrassing-momen.cztr4fc.mongodb.net/data?retryWrites=true&w=majority&appName=Most-Embarrassing-Moments`)
module.exports = { connection }