const express = require("express");
const router = express.Router();


const ffcgoldController = require('../controller/ffcgoldcont');

router.get('/goldclass', ffcgoldController.getFfcgold);



module.exports = router;