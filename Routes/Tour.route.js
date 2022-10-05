const express = require('express');
const route = express.Router();

//get route
const { getAllTours,postATour } = require('../Controllers/Tour.controler');
route.get('/', getAllTours);
route.post('/', postATour);

module.exports = route;