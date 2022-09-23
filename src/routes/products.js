module.exports = function (router) {
  const bodyParser = require("body-parser");
  const Contenedor = require("../contenedor.js");
  const nuevo = new Contenedor("./productos.txt");
  let urlencodedParser = bodyParser.urlencoded({ extended: false });

  router.get("/", async (req, res) => {
    const productos= await nuevo.getAll();
    res.render('pages/list', {productos})
  });

  router.get("/crear", async (req, res) => {
    res.render('pages/form', {})
  });

  router.post("/", urlencodedParser, async (req, res) => {
    await nuevo.save(req.body)
    res.redirect('/productos/crear');
  });

  return router;
};

