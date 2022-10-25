const options = require("../../sqlite3.config");
const knex = require("knex");

const database = knex(options);

database.schema
  .hasTable("chats")
  .then((res) => {
    if (res) {
      console.log("Tabla chats ya ha sido creada");
      return;
    }
    database.schema
      .createTable("chats", (table) => {
        table.increments("id").primary().notNullable(),
          table.timestamp("date").notNullable(),
          table.string("email", 50).notNullable(),
          table.string("message", 250).notNullable();
      })
      .then(() => console.log("Table Created!"))
      .catch((err) => console.log(err))
      .finally(() => database.destroy());
  })
  .catch((err) => console.log(err));
