const { createUser, authLogin, findAll, findById, deleteUser } = require('./user.controller');
const { createCategory, findAllCategory } = require('./category.controller');
const { createPost, findAllPost, 
    findPostById, updatePost, deletePost } = require('./blog_post.controller');

module.exports = {
    authLogin,
    createUser,
    findAll,
    findById,
    createCategory,
    findAllCategory,
    createPost,
    findAllPost,
    findPostById,
    updatePost,
    deletePost,
    deleteUser,
};