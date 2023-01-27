const express = require('express');
require('express-async-errors');
const handleError = require('./middlewares/handleError');
const handleTokenMiddleware = require('./middlewares/handleTokenMiddleware');
const controller = require('./controllers');

const app = express();

app.use(express.json());

app.post('/login', controller.authLogin);
app.post('/user', controller.createUser);
app.get('/user', handleTokenMiddleware, controller.findAll);
app.get('/user/:id', handleTokenMiddleware, controller.findById);

app.use(handleError);

module.exports = app;
