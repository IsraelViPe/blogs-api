const express = require('express');
require('express-async-errors');
const handleError = require('./middlewares/handleError');
const handleTokenMiddleware = require('./middlewares/handleTokenMiddleware');
const controller = require('./controllers');
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');

const app = express();

app.use(express.json());

app.post('/login', controller.authLogin);
app.use('/user', userRouter);
app.use('/post', postRouter);
app.post('/categories', handleTokenMiddleware, controller.createCategory);
app.get('/categories', handleTokenMiddleware, controller.findAllCategory);

app.use(handleError);

module.exports = app;
