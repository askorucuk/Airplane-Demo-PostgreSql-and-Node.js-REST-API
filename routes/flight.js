const express = require("express");
const router = express.Router();


const flightController = require('../controller/flightcont');

router.get("/flights", flightController.getFlights);


module.exports = router;
