const { authentication } = require('./authentication.service');
const { createUser, findAll, findById } = require('./user.service');
const { createCategory } = require('./category.service');

module.exports = {
    authentication,
    createUser,
    findAll,
    findById,
    createCategory,
};