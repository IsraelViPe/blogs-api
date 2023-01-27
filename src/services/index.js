const { authentication } = require('./authentication.service');
const { createUser, findAll, findById } = require('./user.service');

module.exports = {
    authentication,
    createUser,
    findAll,
    findById,
};