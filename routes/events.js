const express = require("express");
const router = express.Router();
const eventsCtrl = require("../controllers/events");

function ensureLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
}

router.get("/", eventsCtrl.index); //(display all events)
router.get("/new", ensureLoggedIn, eventsCtrl.new); //(display a form for entering a new event)
router.post("/", eventsCtrl.create); //(display a "detail/show" page for a single event)
router.get("/:id", ensureLoggedIn, eventsCtrl.show); //(handle the new form being submitted)

module.exports = router;
