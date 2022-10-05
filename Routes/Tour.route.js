const express = require('express');
const route = express.Router();

//get route
const { getAllTours,postATour,getATours,updateTour,topViewedTours,getCheapestTours } = require('../Controllers/Tour.controler');
const viewCount = require('../Middleware/viewCount');
route.get('/', getAllTours);
route.get('/trending',topViewedTours);
route.get('/cheapest',getCheapestTours);
route.get('/:id', viewCount,getATours);
route.patch('/:id',updateTour)
route.post('/', postATour);

module.exports = route;