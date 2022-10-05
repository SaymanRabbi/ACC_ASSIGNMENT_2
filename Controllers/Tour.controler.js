const { postATour,getAllTours } = require("../Services/Tour.services");

//Get all products
exports.getAllTours = async(req, res,next) => {
try {
    let tourObj = {...req.query};
    const excludeFields = ['sort','limit','page'];
    excludeFields.forEach(field=>delete tourObj[field]);
    let queryStr = JSON.stringify(tourObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g,match=>`$${match}`);
    tourObj = JSON.parse(queryStr);
    const queries = {}
    //sort
    if(req.query.sort){
      const sortBy = req.query.sort.split(',').join(' ');
      queries.sortBy = sortBy;
    }
    //filtering
    if(req.query.fields){
      const fields = req.query.fields.split(',').join(' ');
      queries.fields = fields;
    }
    //pagination
      if(req.query.page){
      const {page =1,limit = 10} = req.query;
      const skip = (page-1)*parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);
      }
      const tour = await getAllTours(tourObj,queries);
      res.status(200).json({
        status: "success",
        data: tour
      })
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