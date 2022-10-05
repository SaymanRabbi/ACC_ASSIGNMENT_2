const { postATour } = require("../Services/Tour.services");

//Get all products
exports.getAllTours = async(req, res,next) => {
try {
    
} catch (error) {
    next(error)
}
}
//Post a product
exports.postATour= async(req, res,next) => {
try {
    const tour= await postATour(req.body);
    res.status(200).json({
        status: "success",
        data: tour
    })
} catch (error) {
    next(error)
}
}