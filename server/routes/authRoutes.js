const passport = require("passport");
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/facebook",
    passport.authenticate("facebook", {
      scope: ["email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/tickets");
    }
  );

  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook"),
    (req, res) => {
      res.redirect("/tickets");
    }
  );

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/api/logout", requireLogin, (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
