const { authLogin } = require('./login.controller');
const { createUser } = require('./create_user.controller');

module.exports = {
    authLogin,
    createUser,
};