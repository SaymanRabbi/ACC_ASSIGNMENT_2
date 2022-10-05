const Tour = require('../Models/Tour.schema');
//post a product
exports.postATour = async(tour) => {
    const newTour = new Tour(tour);
    const data = await newTour.save();
    return data;
}
exports.getAllTours = async(tourObj,queries) => {
const tour = await Tour.find(tourObj)
 .skip(queries.skip)
 .limit(queries.limit)
 .select(queries.fields)
 .sort(queries.sortBy);
 const toatalTours = await Tour.countDocuments(tourObj);
return {tour,toatalTours};
}