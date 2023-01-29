const service = require('../services');
const newPostValidation = require('../services/validation/newPostValidation');

const createPost = async (req, res) => {
    const { id } = res.user;
   
    const { error } = newPostValidation(req.body);
    if (error) {
        error.status = 400;
        error.message = 'Some required fields are missing';
        throw error;
    }

    const newPost = await service.createPost(id, req.body);
    res.status(201).json(newPost);
};

module.exports = {
    createPost,
};