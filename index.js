require('dotenv').config();
const express = require('express');
const app = express();

const customerRoutes = require('./api/routes/customers');

app.use('/customers', customerRoutes.router);

module.exports = app;


