const express = require('express');
const route = express.Router();

//get route
const { getAllProducts } = require('../Controllers/Product.controler');
route.get('/',getAllProducts)

module.exports = route;