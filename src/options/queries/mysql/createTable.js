const options = require("../../mysql.config");
const knex = require("knex");

const database = knex(options);

database.schema
  .hasTable("products")
  .then((res) => {
    if (res) {
      console.log("Tabla products ya ha sido creada");
      return;
    }
    database.schema
      .createTable("products", (table) => {
        table.increments("id").primary().notNullable(),
          table.timestamp("timestamp").notNullable(),
          table.string("nombre", 50).notNullable(),
          table.float("precio").notNullable(),
          table.string("descripcion", 250),
          table.string("codigo").unique(),
          table.string("foto", 200),
          table.integer("stock").notNullable();
      })
      .then(() => console.log("Table Created!"))
      .catch((err) => console.log(err))
      .finally(() => database.destroy());
  })
  .catch((err) => console.log(err));
