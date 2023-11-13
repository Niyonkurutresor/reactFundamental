const Joi = require("joi");
const postSchema = Joi.object({
    userId: Joi.string().required()
    .error(new Error('Please provide user Id')),
    title:Joi.string().required()
    .error(new Error('Please provide title of your post')),
    content: Joi.string().required().error(new Error('you need to pass any content'))
    // .error(new Error('You need to post any content')),
})

module.exports = { postSchema }
