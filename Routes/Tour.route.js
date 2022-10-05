const express = require('express');
const route = express.Router();

//get route
const { getAllTours,postATour,getATours,updateTour } = require('../Controllers/Tour.controler');
const viewCount = require('../Middleware/viewCount');
route.get('/', getAllTours);
route.get('/:id', viewCount,getATours);
route.patch('/:id',updateTour)
route.post('/', postATour);

module.exports = route;