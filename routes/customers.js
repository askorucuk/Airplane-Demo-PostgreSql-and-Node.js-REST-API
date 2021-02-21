const express = require("express");
const router = express.Router();
const path = require('path');


const admin = require('./admin');
const customController = require('../controller/customcont');

const db = require('../db/custom');
const Customer = require("../models/custschema");



router.get("/customers", customController.getCust);

router.get("/customers/:passport_no", customController.getById);

//router.delete("/:passport_no", customController.postDeleteCustomer)

router.delete(`customers/:passport_no` ,customController.deletecustompls);


//customers/:passport_no?passport_no=U765858


module.exports = router;