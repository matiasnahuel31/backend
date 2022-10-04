module.exports = function (router) {
  const bodyParser = require("body-parser");
  const Contenedor = require("../contenedor.js");
  const nuevo = new Contenedor("./productos.txt");
  let urlencodedParser = bodyParser.urlencoded({ extended: false });

  router.get("/", async (req, res) => {
    const productos = await nuevo.getAll();
    res.render("pages/list", { productos });
  });

  router.get("/:id", async (req, res) => {
    const producto = await nuevo.getById(req.params.id);
    producto
      ? res.status(200).json(producto)
      : res
          .status(400)
          .json({ error: "Ocurrió un error al encontrar el producto." });
  });

  router.get("/crear", async (req, res) => {
    res.render("pages/form", {});
  });

  router.post("/", urlencodedParser, async (req, res) => {
    const {body} = req;
    body.timestamp = Date.now();
    await nuevo.save(body);
    res.redirect("/productos/crear");
  });

  router.put("/:id", async (req, res) => {
    const productUpdated = await nuevo.updateById(req.params.id - 1, req.body);
    productUpdated
      ? res.status(200).send({ success: "Producto actualizado." })
      : res
          .status(404)
          .send({ error: "Ocurrió un error al encontrar el producto." });
  });

  router.delete("/:id", async (req, res) => {
    const productDeleted = await nuevo.deleteById(Number(req.params.id));
    productDeleted
      ? res.status(200).send({ success: "Producto eliminado." })
      : res
          .status(404)
          .send({ error: "Ocurrió un error al encontrar el producto." });
  });

  return router;
};
