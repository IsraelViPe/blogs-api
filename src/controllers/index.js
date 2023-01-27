const { createUser, authLogin, findAll, findById } = require('./user.controller');
const { createCategory, findAllCategory } = require('./category.controller');

module.exports = {
    authLogin,
    createUser,
    findAll,
    findById,
    createCategory,
    findAllCategory,
};