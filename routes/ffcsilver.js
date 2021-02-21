const express = require("express");
const router = express.Router();


const ffcsilverController = require('../controller/ffcsilvercont');


router.get('/silverclass', ffcsilverController.getFfcsilver);



module.exports = router;