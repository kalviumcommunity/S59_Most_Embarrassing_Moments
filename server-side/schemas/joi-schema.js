const Joi = require('joi')

const postSchema = Joi.object({
    name: Joi.string().required(),
    title: Joi.string().min(3).max(50).required(),
    body: Joi.string().required()
})

module.exports = postSchema