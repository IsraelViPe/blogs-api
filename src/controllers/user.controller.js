const services = require('../services');

const authLogin = async (req, res, next) => {
    const { email, password } = req.body;
    const response = await services.authentication(email, password);
   
    if (response.status) return next(response);

    res.status(200).json(response);
};

const createUser = async (req, res, next) => {
    const response = await services.createUser(req.body);
    if (response.status) {
        return next(response);
    }
    return res.status(201).json(response);
};

const findAll = async (_req, res, next) => {
    try {
        const response = await services.findAll();
        return res.status(200).json(response);
    } catch (e) {
        return next(e);
    }
};

const findById = async (req, res) => {
    const { id } = req.params;
    const response = await services.findById(id);

    res.status(200).json(response);
};

const deleteUser = async (_req, res) => {
    await services.deleteUser(res.user.id);

    res.status(204).end();
};

module.exports = {
    createUser,
    authLogin,
    findAll,
    findById,
    deleteUser,
};