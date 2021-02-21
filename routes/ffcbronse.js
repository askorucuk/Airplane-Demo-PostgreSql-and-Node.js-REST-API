const express = require("express");
const router = express.Router();


const ffcbronzeController = require('../controller/ffcbronzecont');


router.get('/bronzeclass', ffcbronzeController.getFfcbronze);



module.exports = router;