const options = require("../mysql.config");
const knex = require("knex");

const database = knex(options);

database("products")
  .select("*")
  .then((data) => {
    console.log(JSON.parse(JSON.stringify(data)))
  })
  .catch((err) => console.log(err))
  .finally(() => database.destroy());
