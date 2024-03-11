const Joi = require('joi')

const schema = Joi.object({
    name: Joi.string(),
    title: Joi.string().min(3).max(50),
    body: Joi.string()
})

module.exports = {
    schema
}