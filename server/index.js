const express = require('express')
const carsData = require('../data/cars.original.json')


const route  = require('./routes')

const port = 3001

// req body (json)
const app = express()
app.use(express.json())

// static public
app.use(express.static("public"))
app.use("/", route)

// req challenge 3 no e-2
app.patch("/cars/:id", (req, res) => {
  const { id } = req.params;
  const newData = req.body;

  // Temukan mobil dengan ID yang sesuai
  const carToUpdateIndex = carsData.findIndex(car => car.id === id);

  // Jika mobil tidak ditemukan, kirim respons 404
  if (carToUpdateIndex === -1) {
    return res.status(404).json({ message: `Car with id ${id} is Not Found!` });
  }

  // Perbarui data mobil dengan data yang baru
  carsData[carToUpdateIndex] = { ...carsData[carToUpdateIndex], ...newData };

  const response = {
    data: carsData[carToUpdateIndex],
    message: "Car data updated successfully",
  };

  res.status(200).json(response);
});

// req challenge 3 no f
app.delete("/cars/:id", (req, res) => {
  const { id } = req.params;

  const carIndex = carsData.findIndex(car => car.id === id);

  if (carIndex === -1) {
    return res.status(404).json({ message: `Car with id ${id} is Not Found!` });
  }

  carsData.splice(carIndex, 1);

  res.status(200).json({ message: `Car with id ${id} has been successfully deleted.` });
});

app.listen(port, () => {
  console.log(`Listening server on port : ${port}`)
})