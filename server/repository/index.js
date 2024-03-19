const carsData = require("../../data/cars.json")
const { v4: uuidv4 } = require('uuid')

exports.getCars = (capacity, manufacture, year) => {
  let data = carsData.map(cars => cars)

  data = data.filter((cars) => {
    let filteredStatus = true
    if (capacity) {
      filteredStatus = 
        filteredStatus && 
        cars.capacity.toString().includes(capacity)
    }
    if (manufacture) {
      filteredStatus = 
        filteredStatus &&
        cars.manufacture.toLowerCase().includes(manufacture?.toLowerCase())
    }
    if (year) {
      filteredStatus = 
        filteredStatus &&
        cars.year.toString().includes(year)
    }

    return filteredStatus
  })

  return data
}

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

exports.updateCar = (id, data) => {
  const carIndex = carsData.findIndex(car => car.id === id)
  if (carIndex === -1) {
    return { success: false, message: `Car with id ${id} is not found!` }
  }

  const updatedCar = { 
    ...carsData[carIndex], 
    ...data 
  }
  carsData[carIndex] = updatedCar

  return { success: true, data: updatedCar, message: "Car data updated successfully" }
}

exports.updateCarPatch = (id, data) => {
  const carIndex = carsData.findIndex(car => car.id === id)
  if (carIndex === -1) {
    return { success: false, message: `Car with id ${id} is not found!` }
  }

  const updatedCar = { 
    ...carsData[carIndex], 
    ...data 
  }

  carsData[carIndex] = updatedCar

  return { success: true, data: updatedCar, message: "Car data updated successfully" }
}

exports.delCar = (id) => {
  const index = carsData.findIndex((cars) => cars.id == id)
  if (index === -1) {
    return null
  }
  
  const data = carsData.splice(index, 1)[0]
  return data
}