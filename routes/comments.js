const express = require("express");
const router = express.Router();
const commentsCtrl = require("../controllers/comments");

function ensureLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/");
  }

router.post("/events/:id/comments", ensureLoggedIn, commentsCtrl.create);
router.delete("/comments/:id", ensureLoggedIn, commentsCtrl.delete);

module.exports = router;
