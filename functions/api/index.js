const express = require('express');
const serverless = require('serverless-http');
const app = express();
const user = require('./user');

app.use('/user', user);

module.exports.handler = serverless(app);
