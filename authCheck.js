function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next(); // Proceed to the next middleware or route handler
  }
  res.redirect("/login"); // Redirect to login if not authenticated
}

module.exports = { ensureAuthenticated };
