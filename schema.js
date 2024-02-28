const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    moment_one: {
        type: String,
        required: true
    },
    moment_two: {
        type: String,
        required: true
    },
    moment_three: {
        type: String,
        required: true
    }
})

const Moment = mongoose.model('Moment', schema)

module.exports = Moment