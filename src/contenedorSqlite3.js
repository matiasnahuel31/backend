const fs = require("fs");
const optionsSqlite3 = require("./options/sqlite3.config");
const knex = require("knex");
const databaseSqlite3 = knex(optionsSqlite3);

class Contenedor {
  async save(objeto, model) {
    if (model) {
      try {
        const productID = await databaseSqlite3("chats").insert(objeto);
        return productID;
      } catch (error) {
        console.log(error);
      }
    }
    return model;
  }
  async getById(id) {
    try {
      return await databaseSqlite3("chats")
        .select('*')
        .where("id", id);
    } catch (error) {
      console.log(error);
    }
  }
  async updateById(id, pro) {
    try {
      await databaseSqlite3("chats").update(pro).where("id", id);
      return true;
    } catch (error) {
      console.log(error);
    }
  }
  async getAll() {
    try {
      return await databaseSqlite3("chats").select("*");
    } catch (error) {
      console.log(error);
    }
  }
  async deleteById(id) {
    try {
      await databaseSqlite3("chats").del().where("id", id);
      console.log("El mensaje ha sido borrado con exito.");
      return true;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteAll() {
    try {
      await databaseSqlite3("chats").del();
      console.log("Mensajes borrados con exito");
      return true;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Contenedor;
