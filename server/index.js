const express = require('express')
const route  = require('./routes')

const port = 3001

// req body (json)
const app = express()
app.use(express.json())

// static public
app.use(express.static("public"))
app.use("/", route)

app.listen(port, () => {
  console.log(`Listening server on port : ${port}`)
})