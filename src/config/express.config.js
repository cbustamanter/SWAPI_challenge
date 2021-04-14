const express = require('express');
const app = express();
const routes = require('../api/routes/v1');

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/api/v1', routes);

module.exports = app;