const Event = require("../models/event");



function create(req, res) {
    Event.findById(req.params.id, function (err, event) {
      // We push an object with the data for the
      // comment subdoc into Mongoose arrays
      req.body.user = req.user._id;
      req.body.userName = req.user.name;
      req.body.userAvatar = req.user.avatar;
      event.comments.push(req.body);
      event.save(function (err) {
        res.redirect(`/events/${event._id}`);
      });
    });
  }

  async function deleteComment(req, res, next) {
    try {
      const event = await Event.findOne({
        "comments._id": req.params.id,
        "comments.user": req.user._id,
      });
      if (!event) return res.redirect("/events");
      event.comments.remove(req.params.id);
      await event.save();
      res.redirect(`/events/${event._id}`);
    } catch (err) {
      return next(err);
    }
  }

module.exports = {
  create,
  delete: deleteComment,
  };