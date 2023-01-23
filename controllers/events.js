const Event = require("../models/event");

module.exports = {
  index,
  new:newEvent,
};

function index(req, res) {
  Event.find({}, function (err, events) {
    res.render("events/index", { title: "All Events", events });
  });
}

function newEvent(req, res) {
  res.render("events/new", { title: "Add Event" });
}