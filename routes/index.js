var express = require("express");
var router = express.Router();
const passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect("/events");
});

router.get(
  "/auth/google",
  passport.authenticate("google", {
    // Requesting the user's profile and email
    scope: ["profile", "email"],
  })
);

router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/events",
    failureRedirect: "/events",
  })
);

// OAuth logout route
router.get("/logout", function (req, res) {
  req.logout(function () {
    res.redirect("/events");
  });
});

module.exports = router;
