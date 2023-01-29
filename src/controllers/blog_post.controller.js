const service = require('../services');

const createPost = async (req, res) => {
    const { id } = res.user;
    const newPost = await service.createPost(id, req.body);
    res.status(201).json(newPost);
};

const findAllPost = async (_req, res) => {
   const response = await service.findAllPost();

   res.status(200).json(response);
};

module.exports = {
    createPost,
    findAllPost,
};