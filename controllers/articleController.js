const { Article, User, Comment } = require("../models");

// Display a listing of the resource.
function index(req, res) {
  // Esta será la página principal del proyecto.

  res.render("article");
}

// Display the specified resource.
async function show(req, res) {
  // Aquí necesitaremos los datos del articulo al que se le ha hecho clic.
  // La info de qué articulo necesitamos debería estar presente como parte de la URL (req.params)
  const id = req.params.id;
  const article = await Article.findByPk(id, { include: User });
  const users = await User.findAll();
  const comment = await Comment.findAll({ where: { articleId: id } });

  res.render("article", { id, article, users, comment });
}

// Show the form for creating a new resource
async function create(req, res) {
  // Esta vista tendrá un formulario que será el encargado de recibir los datos para crear
  // un nuevo artículo.
  // id = req.params.id
  // const articles = await Article.findAll({});
  res.render("create");
}

// Store a newly created resource in storage.
async function store(req, res) {
  // - Recibir la información que proviene del formulario (req.body)
  // - Crear el artículo en la BBDD con todos los datos necesarios
  // - Redireccionar (redirect) la navegación hacia `[GET] /admin`
  res.redirect("admin");
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const id = req.params.id;
  const users = await User.findAll();
  const article = await Article.findByPk(id);
  if (!article) {
    // Manejar el caso en que el artículo no se encuentra
    res.status(404).send("Artículo no encontrado");
    return;
  }
  res.render("editArticle", { article, users });
}

// Update the specified resource in storage.
async function update(req, res) {
  //   - Recibir la información que proviene del formulario (req.body)
  const id = req.params.id;
  const { newContent, newTitle } = req.body;

  // - Hacer un update el artículo mencionado.
  await Article.update(
    { title: newTitle, content: newContent },
    {
      where: {
        id: id,
      },
    },
  );

  console.log(newContent);

  // Redireccionar (redirect) la navegación hacia [GET] /admin
  res.redirect("/admin");
}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
