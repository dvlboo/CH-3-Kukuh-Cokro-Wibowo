const carsData = require("../../data/cars.original.json")
const { v4: uuidv4 } = require('uuid')

exports.getCars = () => data = carsData.map(cars => cars)

exports.getCar = (id) => {
  let data = [...carsData]
  data = data.filter(cars => cars.id == id)
  return data
}

exports.postCar = (data) => {
  const carsId = uuidv4()
  data.id = carsId

  data = {
    id : data.id,
    ...data
  }
  carsData.push(data)
  return data
}

exports.updateCar = (carId, newData) => {
  const carIndex = carsData.findIndex(car => car.id === carId);
  if (carIndex === -1) {
    return { success: false, message: `Car with id ${carId} is not found!` };
  }

  const requiredFields = ["plate", "transmission", "manufacture", "model", "available", "type", "year", "options", "specs"];
  for (const field of requiredFields) {
    if (!newData[field]) {
      return { success: false, message: `Incomplete car information. Please provide all required fields.` };
    }
  }

  const updatedCar = { ...carsData[carIndex], ...newData };
  carsData[carIndex] = updatedCar;

  return { success: true, data: updatedCar, message: "Car data updated successfully" };
};

exports.updateCarPatch = (carId, newData) => {
  const carIndex = carsData.findIndex(car => car.id === carId);
  if (carIndex === -1) {
    return { success: false, message: `Car with id ${carId} is not found!` };
  }

  // Update car data
  const updatedCar = { ...carsData[carIndex], ...newData };
  carsData[carIndex] = updatedCar;

  return { success: true, data: updatedCar, message: "Car data updated successfully" };
};

exports.delCar = (id) => {
  const index = carsData.findIndex((cars) => cars.id)
  if (index === -1) {
    return null
  }
  
  const data = carsData.splice(index, 1)[0]
  return data
}