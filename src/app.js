const express = require('express');
const handleError = require('./middlewares/handleError');
const controller = require('./controllers');

const app = express();

app.use(express.json());

app.post('/login', controller.authLogin);

app.use(handleError);

module.exports = app;
