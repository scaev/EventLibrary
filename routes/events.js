var express = require("express");
var router = express.Router();
var eventsCtrl = require("../controllers/events");

router.get("/", eventsCtrl.index);
router.get("/new", eventsCtrl.new);
router.post("/", eventsCtrl.create);

module.exports = router;
