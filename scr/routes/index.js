var express = require('express');
var router = express.Router();
var {index, detalle}=require("../controllers/indexController")
/* GET home page. */
router.get('/',index );
router.get("/menu/:id",detalle)
module.exports = router;
