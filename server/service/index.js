const carsRepo  = require("../repository");

exports.getCars = (capacity, manufacture, year) => data = carsRepo.getCars(capacity, manufacture, year)
exports.getCar = (id) => data = carsRepo.getCar(id)
exports.postCar = (data) => data = carsRepo.postCar(data)
exports.updateCar = (id, data) => carsRepo.updateCar(id, data);
exports.updateCarPatch = (carId, newData) => carsRepo.updateCarPatch(carId, newData);
exports.delCar = (id) => data = carsRepo.delCar(id)
