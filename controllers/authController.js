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

async function showRegister(req, res) {
  res.render("registro");
}

// Show the form for creating a new resource
async function create(req, res) {
  console.log(req.body);
  const { firstname, lastname, username, email, password } = req.body;

  // - Crear el user en la BBDD con todos los datos necesarios

  await User.create({
    firstname,
    lastname,
    username,
    email,
    password,
  });
  res.render("login");
}

// Store a newly created resource in storage.
async function store(req, res) {}

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
  showRegister,
  login,
  create,
  store,
  edit,
  update,
  destroy,
};
