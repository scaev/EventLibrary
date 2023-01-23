var express = require("express");
var router = express.Router();
var eventsCtrl = require("../controllers/events");

router.get("/", eventsCtrl.index);

module.exports = router;