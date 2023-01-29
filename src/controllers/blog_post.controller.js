const service = require('../services');

const createPost = async (req, res) => {
    const { id } = res.user;
    const newPost = await service.createPost(id, req.body);
    res.status(201).json(newPost);
};

module.exports = {
    createPost,
};