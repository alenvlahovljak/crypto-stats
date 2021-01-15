const path = require('path');
const express = require('express');

const app = express();

const { statsRoutes } = require('./routes');

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(express.static('public'));

app.use('/', statsRoutes);

module.exports = app;
