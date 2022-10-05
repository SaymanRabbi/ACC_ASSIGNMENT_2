const express = require('express');
const route = express.Router();

//get route
const { getAllTours,postATour,getATours } = require('../Controllers/Tour.controler');
const viewCount = require('../Middleware/viewCount');
route.get('/', getAllTours);
route.get('/:id', viewCount,getATours);
route.post('/', postATour);

module.exports = route;