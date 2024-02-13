const passport = require("passport");
const { User } = require("../models");

// Display a listing of the resource.
async function showLogin(req, res) {
  res.render("login");
}

const login = passport.authenticate("local", {
  successRedirect: "/admin",
  failureRedirect: "/login",
});

// Store a newly created resource in storage.
async function logout(req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  showLogin,
  login,
  logout,
};
