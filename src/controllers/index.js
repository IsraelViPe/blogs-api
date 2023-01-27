const { createUser, authLogin, findAll, findById } = require('./user.controller');

module.exports = {
    authLogin,
    createUser,
    findAll,
    findById,
};