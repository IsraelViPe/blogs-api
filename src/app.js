const express = require('express');
require('express-async-errors');
const handleError = require('./middlewares/handleError');
const handleTokenMiddleware = require('./middlewares/handleTokenMiddleware');
const controller = require('./controllers');

const app = express();

app.use(express.json());

app.get('/post/search', handleTokenMiddleware, controller.findByQuery);
app.get('/post', handleTokenMiddleware, controller.findAllPost);
app.get('/post/:id', handleTokenMiddleware, controller.findPostById);
app.post('/post', handleTokenMiddleware, controller.createPost);
app.put('/post/:id', handleTokenMiddleware, controller.updatePost);
app.delete('/post/:id', handleTokenMiddleware, controller.deletePost);

app.post('/login', controller.authLogin);
app.get('/user', handleTokenMiddleware, controller.findAll);
app.get('/user/:id', handleTokenMiddleware, controller.findById);
app.post('/user', controller.createUser);

app.post('/categories', handleTokenMiddleware, controller.createCategory);
app.get('/categories', handleTokenMiddleware, controller.findAllCategory);

app.delete('/user/me', handleTokenMiddleware, controller.deleteUser);

app.use(handleError);

module.exports = app;
