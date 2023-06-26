const express = require('express');
const handleTokenMiddleware = require('../middlewares/handleTokenMiddleware');
const controller = require('../controllers');

const postRouter = express.Router();

postRouter.get('/search', handleTokenMiddleware, controller.findByQuery);
postRouter.get('/', handleTokenMiddleware, controller.findAllPost);
postRouter.get('/:id', handleTokenMiddleware, controller.findPostById);
postRouter.post('/', handleTokenMiddleware, controller.createPost);
postRouter.put('/:id', handleTokenMiddleware, controller.updatePost);
postRouter.delete('/:id', handleTokenMiddleware, controller.deletePost);

module.exports = postRouter;
