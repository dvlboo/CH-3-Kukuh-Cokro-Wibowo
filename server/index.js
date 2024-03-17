const express = require('express')
const app = express()
const port = 3001

// req body (json)
app.use(express.json())

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.send('')
})

app.listen(port, () => {
  console.log(`Listening server on port : ${port}`)
})