const { User } = require("../models");

// Display a listing of the resource.
const index = (req, res) => {
  // res.render("home");
};

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
function edit(req, res) {
  // const id = req.params.id;
  res.render("editArticle");
  // Incluir luego para pasar el dato { id }
}
// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

function admin(req, res) {
  res.render("admin");
}

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
  admin,
};
