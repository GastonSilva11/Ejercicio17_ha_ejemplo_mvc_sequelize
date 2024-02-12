const { Article, User, Comment } = require("../models");

// Store a newly created resource in storage.
async function store(req, res) {
  const { userId, content, articleId } = req.body;
  await Comment.create({ userId, content, articleId });
  res.redirect(`/articulos/${articleId}`);
}

module.exports = {
  store,
};

// - `**[POST]` http://localhost:3000/comments** → Agregar comentario

//     Esta ruta se encargará de:

//     - Recibir la información que proviene del formulario de comentarios presente en la vista de detalle de artículos. (req.body)
//     - Crear el comentario en la BBDD con todos los datos necesarios:
//         - Nombre
//         - Contenido
//         - ID del artículo → Cómo podemos enviar este dato como parte del formulario? Pueden utilizar un input de tipo `hidden`: https://www.w3schools.com/tags/att_input_type_hidden.asp
//     - Recargar la página
