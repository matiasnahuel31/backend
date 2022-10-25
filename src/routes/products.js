module.exports = function (router) {
  const bodyParser = require("body-parser");
  const Contenedor = require("../contenedorMysql.js");
  const nuevo = new Contenedor("./productos.json");
  const Producto = require("../model/product");
  const urlencodedParser = bodyParser.urlencoded({ extended: false });

  router.get("/", async (req, res) => {
    const productos = await nuevo.getAll();
    res.render("pages/list", { productos });
  });

  router.get("/crear", async (req, res) => {
    res.render("pages/form", {});
  });

  router.post("/", urlencodedParser, async (req, res) => {
    req.body.timestamp = new Date()
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    const isSaved = await nuevo.save(req.body, Producto(req.body));
    isSaved
      ? res
          .status(200)
          .json({ success: `Producto añadido con ID: ${isSaved}`})
      : res
          .status(404)
          .send({ error: "Ocurrió un error al encontrar el producto." });
  });

  return router;
};
