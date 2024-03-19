const carsRepo  = require("../repository");

exports.getCars = () => data = carsRepo.getCars()
exports.getCar = (id) => data = carsRepo.getCar(id)
exports.postCar = (data) => data = carsRepo.postCar(data)
exports.updateCar = (carId, newData) => carsRepo.updateCar(carId, newData);
exports.updateCarPatch = (carId, newData) => carsRepo.updateCarPatch(carId, newData);
exports.delCar = (id) => data = carsRepo.delCar(id)
