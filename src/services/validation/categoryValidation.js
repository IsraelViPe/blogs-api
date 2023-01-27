const Joi = require('joi');

module.exports = (name) => Joi.object({
        name: Joi.string().required(),
    }).validate(name);
