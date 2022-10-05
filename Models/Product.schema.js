const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({
    place:{
        type:String,
        required:[true,'A tour must have a place'],
        unique:true,
        trim:true,
        maxlength:[40,'A tour name must have less or equal then 40 characters'],
        minlength:[3,'A tour name must have more or equal then 10 characters']
    },
    duration:{
        type:Number,
        required:[true,'A tour must have a duration']
    },
    price:{
        type:Number,
        required:[true,'A tour must have a price'],
        min:[1,'Price cannot be less than 1'],

    },
    discription:{
        type:String,
        required:[true,'Please add a description'],
    },
},{
    timestamps:true
})
const Tour = mongoose.model('Tour',tourSchema);
module.exports = Tour;