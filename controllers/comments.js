const Event = require("../models/event");



function create(req, res) {
    Event.findById(req.params.id, function (err, event) {
      // We push an object with the data for the
      // review subdoc into Mongoose arrays
      req.body.user = req.user._id;
      req.body.userName = req.user.name;
      req.body.userAvatar = req.user.avatar;
      event.comments.push(req.body);
      event.save(function (err) {
        res.redirect(`/events/${event._id}`);
      });
    });
  }


module.exports = {
    create,
  };