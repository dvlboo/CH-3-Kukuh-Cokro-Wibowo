const carsService = require("../service")

// Get All Cars by Capacity, Manufacture, Year
exports.getCars = (req, res) => {
  const { capacity, manufacture, year } = req.query

  const data = carsService.getCars(capacity, manufacture, year)

  if (!data || data == "") {
    res.status(404).json({message : "Car Not Found"})
  }

  const response = {
    carsData : data,
    message: "Cars data successfully",
  };

  res.status(200).json(response);
}

// Get All Cars by Params
exports.getCar = (req, res) => {
  const { id } = req.params

  const data = carsService.getCar(id)

  const response = {
    data : data[0],
    message: `Found Car with id ${id}`,
  }

  data.length == 0
    ? res.status(404).json({message : `Car with id ${id} is Not Found!`}) 
    : res.status(200).json(response)
}

// Post Car with Middleware
exports.postCar = (req, res, next) => {
  const data = carsService.postCar(req.body)

  // middleware validity data
  const requiredFields = ["plate","manufacture", "model", "image", "rentPerDay", "capacity", "description", "availableAt", "transmission", "available", "type", "year", "options", "specs"];
  for (const field of requiredFields) {
    if (!data[field] || data[field] === "") {
      return res.status(400).json({
        data: null,
        message: `${field} must be filled`
      });
    }
  }

  next();

  const response = {
    data,
    message : "New car added successfully."
  }
  
  res.status(201).json(response)
}

// Edit Car with Middelware Using Put
exports.putCar = (req, res, next) => {
  const { id } = req.params;
  const data = req.body;

  const updateResult = carsService.updateCar(id, data);

  // middleware validity data
  const requiredFields = ["plate","manufacture", "model", "image", "rentPerDay", "capacity", "description", "availableAt", "transmission", "available", "type", "year", "options", "specs"];
  for (const field of requiredFields) {
    if (!data[field] || data[field] === "") {
      return res.status(400).json({
        editData: null,
        message: `${field} must be filled`
      });
    }
  }

  next();

  if (!updateResult.success) {
    return res.status(404).json({ data: null, message: updateResult.message });
  }

  res.status(200).json({ data: updateResult.data, message: updateResult.message });
};

// Edit Car Using Patch
exports.patchCar = (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const updateResult = carsService.updateCarPatch(id, data);

  if (!updateResult.success) {
    return res.status(404).json({ data: null, message: updateResult.message });
  }

  res.status(200).json({ data: updateResult.data, message: updateResult.message });
};

// Delete Car by Params
exports.delCar = (req, res) => {
  const { id } = req.params

  const data = carsService.delCar(id)

  if (!data) {
    return res.status(404).json({
      data: null,
      message: `Car with id ${id} is not found!`,
    });
  }

  const response = {
    message: "Car deleted successfully",
    data
  }

  res.status(202).json(response)
}