const express = require('express');
const handleTokenMiddleware = require('../middlewares/handleTokenMiddleware');
const controller = require('../controllers');

const userRouter = express.Router();

userRouter.get('/', handleTokenMiddleware, controller.findAll);
userRouter.get('/:id', handleTokenMiddleware, controller.findById);
userRouter.post('/', handleTokenMiddleware, controller.createUser);
userRouter.delete('/me', handleTokenMiddleware, controller.deleteUser);

module.exports = userRouter;