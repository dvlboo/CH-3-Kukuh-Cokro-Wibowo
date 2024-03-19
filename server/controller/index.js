const carsService = require("../service")

exports.getCars = (req, res) => {
  const data = carsService.getCars()

  const response = {
    carsData : data,
    message: null,
  };

  res.status(200).json(response);
}

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

exports.postCar = (req, res) => {
  const data = carsService.postCar(req.body)

  if (!data.plate || 
    !data.transmission || 
    !data.manufacture || 
    !data.model || 
    !data.available || 
    !data.type || 
    !data.year || 
    !data.options || 
    !data.specs) 
      {
    return res.status(400).json(
      { message: "Incomplete car information. Please provide all required fields." })
  }

  const response = {
    data,
    message : "New car added successfully."
  }
  
  res.status(201).json(response)

}

exports.updateCar = (req, res) => {
  const { id } = req.params;
  const newData = req.body;

  const updateResult = carsService.updateCar(id, newData);

  if (!updateResult.success) {
    return res.status(404).json({ data: null, message: updateResult.message });
  }

  res.status(200).json({ data: updateResult.data, message: updateResult.message });
};

exports.patchCar = (req, res) => {
  const { id } = req.params;
  const newData = req.body;

  const updateResult = carsService.updateCarPatch(id, newData);

  if (!updateResult.success) {
    return res.status(404).json({ data: null, message: updateResult.message });
  }

  res.status(200).json({ data: updateResult.data, message: updateResult.message });
};

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