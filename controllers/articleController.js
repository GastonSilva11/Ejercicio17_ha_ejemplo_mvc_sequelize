const { Article, User, Comment } = require("../models");

// Display a listing of the resource.
function index(req, res) {
  // Esta será la página principal del proyecto.

  res.render("article");
}

// Display the specified resource.
async function show(req, res) {
  const id = req.params.id;
  // const article = await Article.findByPk(id, { include: User });
  // const comment = await Comment.findAll({ where: { articleId: id }, include: User });
  const users = await User.findAll();

  const article = await Article.findByPk(id, {
    include: ["user", { model: Comment, include: "user" }],
  });
  res.render("article", { article, users });
}

// Show the form for creating a new resource
async function create(req, res) {
  //creamos las vistas del newArticle

  const users = await User.findAll();

  res.render("newArticle", { users });
}

// Store a newly created resource in storage.
async function store(req, res) {
  // - Recibir la información que proviene del formulario (req.body)
  const { newTitle, newContent, newImage, newUserId } = req.body;

  // - Crear el artículo en la BBDD con todos los datos necesarios

  await Article.create({
    title: newTitle,
    content: newContent,
    image: newImage,
    userId: newUserId,
  });

  // console.log("Jane's auto-generated ID:", jane.id);

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
  const { newContent, newTitle, newId } = req.body;

  console.log(req.body);

  // - Hacer un update el artículo mencionado.
  await Article.update(
    { title: newTitle, content: newContent, userId: newId },
    {
      where: {
        id: id,
      },
    },
  );

  // Redireccionar (redirect) la navegación hacia [GET] /admin
  res.redirect("/admin");
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const id = req.params.id;

  await Article.destroy({
    where: {
      id: id,
    },
  });
  res.redirect("/admin");
}
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
