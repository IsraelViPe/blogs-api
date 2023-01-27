const { authentication } = require('./authentication.service');
const { createUser, findAll } = require('./user.service');

module.exports = {
    authentication,
    createUser,
    findAll,
};