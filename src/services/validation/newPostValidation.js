const Joi = require('joi');

module.exports = (post) => 
    Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required(),
        categoryIds: Joi.array().items(Joi.number().required()).required(),
    }).validate(post);
