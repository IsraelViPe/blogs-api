const { createUser, authLogin, findAll } = require('./user.controller');

module.exports = {
    authLogin,
    createUser,
    findAll,
};