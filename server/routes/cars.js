const express = require('express')
const router = express.Router()

const carsController = require('../controller')

// Add Routes
router.get("/", carsController.getCars)
router.get("/:id", carsController.getCar)
router.post("/", carsController.postCar)
router.put("/:id", carsController.putCar)
router.patch("/:id", carsController.patchCar)
router.delete("/:id", carsController.delCar)

module.exports = router