const { User, Article } = require("../models");

// Display a listing of the resource.
const index = (req, res) => {
  // res.render("home");
};

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {
  res.render("newArticle");
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const id = req.params.id;
  const article = await Article.findByPk(id);

  const users = await User.findAll();

  res.render("editArticle", { article, users });

  // Incluir luego para pasar el dato { id }
}

// Update the specified resource in storage.
async function update(req, res) {}

// Otros handlers...
// ...

async function admin(req, res) {
  const articles = await Article.findAll({ include: User });

  res.render("admin", { articles });
}

// Remove the specified resource from storage.
async function destroy(req, res) {}

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
