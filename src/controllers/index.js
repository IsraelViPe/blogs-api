const { createUser, authLogin, findAll, findById } = require('./user.controller');
const { createCategory, findAllCategory } = require('./category.controller');
const { createPost } = require('./blog_post.controller');

module.exports = {
    authLogin,
    createUser,
    findAll,
    findById,
    createCategory,
    findAllCategory,
    createPost,
};