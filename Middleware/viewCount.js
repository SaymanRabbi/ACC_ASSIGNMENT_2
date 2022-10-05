const {  getAtour} = require("../Services/Tour.services");

const viewCount = async (req, res) => {
  const { id } = req.params;
  const tour = await getAtour(id);
  console.log(tour);
  if (!tour) {
    res.status(404).send({
      success: false,
      message: "Tour not found",
    });
  }
  tour.views +=1;
  await tour.save();
  res.status(200).send({
    success: true,
    data: tour,
  });
};


module.exports = viewCount;