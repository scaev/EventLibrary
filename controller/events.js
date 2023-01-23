const Event = require("../models/event");

module.exports = {
    index,
};
  

function index(req, res) {
    Event.find({}, function (err, events) {
      res.render("events/index", { title: "All Events", events });
    });
  }