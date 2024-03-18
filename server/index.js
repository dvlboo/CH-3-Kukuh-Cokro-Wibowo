const express = require('express')
const carsData = require('../data/cars.original.json')
const { v4: uuidv4 } = require('uuid')

const port = 3001

// req body (json)
const app = express()
app.use(express.json())

// req challenge 3 no 1
app.get("/", (req, res) => {
  res.status(200).json({
    message : "Ping Successfully"
  })
})

// req challenge 3 no 2
app.get("/cars", (req, res) => {
  let data = carsData.map(car => car)

  const response = {
    dataCars : data,
    message : "Data Found"
  }

  res.status(200).json(response)

})

// req challenge 3 no 3
app.get("/cars/:id", (req, res) => {
  const id = req.params.id

  let data = [...carsData]

  data = data.filter(cars => cars.id == id)
  
  const response = {
    data : data[0],
    message: null,
  }

  data.length == 0
    ? res.status(404).json({message : `Car with id ${id} is Not Found!`}) 
    : res.status(200).json(response)
})

// re challenge 3 no 4
app.post("/cars", (req, res) => {
  const data = req.body

  const carsId = uuidv4()

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
    
  data.id = carsId

  const payload = {
    id : data.id,
    ...data
  }
  carsData.push(payload)


  const response = {
    data : payload,
    message : "New car added successfully."
  }

  res.status(201).json(response)
})

// app.put("/cars/:id", (req, res) => {
//   const { id } = req.params
//   const data = req.body

//   const carsId = carsData.find(cars => cars.id == id )

//   const response = {
//     data,
//     message : ""
//   }

//   res.status(200).json(response)
// })


// static public
app.use(express.static("public"))

app.listen(port, () => {
  console.log(`Listening server on port : ${port}`)
})