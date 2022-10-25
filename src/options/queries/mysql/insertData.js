const options = require("../mysql.config");
const knex = require("knex");

const database = knex(options);

const productos = [
  {
    timestamp: new Date().toISOString().slice(0, 19).replace("T", " "),
    nombre: "Some Product 1",
    precio: 100,
    descripcion: "Some dummy descripcion 1",
    codigo: "XY-1",
    foto: "someDummyUrl1.com",
    stock: 150,
  },
  {
    timestamp: new Date().toISOString().slice(0, 19).replace("T", " "),
    nombre: "Some Product 2",
    precio: 200,
    descripcion: "Some dummy descripcion 2",
    codigo: "XY-2",
    foto: "someDummyUrl2.com",
    stock: 250,
  },
  {
    timestamp: new Date().toISOString().slice(0, 19).replace("T", " "),
    nombre: "Some Product 3",
    precio: 300,
    descripcion: "Some dummy descripcion 3",
    codigo: "XY-3",
    foto: "someDummyUrl3.com",
    stock: 350,
  },
  {
    timestamp: new Date().toISOString().slice(0, 19).replace("T", " "),
    nombre: "Some Product 4",
    precio: 400,
    descripcion: "Some dummy descripcion 4",
    codigo: "XY-4",
    foto: "someDummyUrl4.com",
    stock: 450,
  },
];

database("products")
  .insert(productos)
  .then(console.log("Productos añadidosssss"))
  .catch((err) => console.log(err))
  .finally(() => database.destroy());
