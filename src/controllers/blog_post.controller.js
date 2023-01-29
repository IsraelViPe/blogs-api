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

const findPostById = async (req, res) => {
    const { id } = req.params;
    const response = await service.findPostById(id);

    res.status(200).json(response);
};

const updatePost = async (req, res) => {
    const { id } = req.params;
    const userId = res.user.id;
  
    const response = await service.updatePost(id, userId, { ...req.body });
    res.status(200).json(response);
};

module.exports = {
    createPost,
    findAllPost,
    findPostById,
    updatePost,
};