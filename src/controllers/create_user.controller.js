const services = require('../services');

const createUser = async (req, res, next) => {
    const response = await services.createUser(req.body);
    if (response.status) {
        return next(response);
    }
    return res.status(201).json(response);
};

module.exports = {
    createUser,
};