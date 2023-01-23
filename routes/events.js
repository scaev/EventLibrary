const express = require("express");
const router = express.Router();
const eventsCtrl = require("../controllers/events");

router.get("/", eventsCtrl.index);
router.get("/new", eventsCtrl.new);
router.post("/", eventsCtrl.create);

module.exports = router;
F