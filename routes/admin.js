const express = require("express");
const router = express.Router();
const pathe = require('path');

const customController = require('../controller/customcont');


router.get("/add", customController.getAddCustomer);

router.post("/add", customController.postAddCustomer);




module.exports = router;

