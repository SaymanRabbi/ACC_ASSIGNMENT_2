const Tour = require('../Models/Tour.schema');
//post a product
exports.postATour = async(tour) => {
    const newTour = new Tour(tour);
    const data = await newTour.save();
    return data;
}