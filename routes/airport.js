const express = require("express");
const router = express.Router();


const airportController = require('../controller/airportcont');

router.get("/airports", airportController.getAirports);


module.exports = router;
