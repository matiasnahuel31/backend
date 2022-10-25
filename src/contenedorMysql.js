const fs = require("fs");
const optionsMysql = require("./options/mysql.config");
const knex = require("knex");
const databaseMysql = knex(optionsMysql);

class Contenedor {
  async save(objeto, model) {
    if (model) {
      try {
        const productID = await databaseMysql("products").insert(objeto);
        return productID;
      } catch (error) {
        console.log(error);
      }
    }
    return model;
  }
  async getById(id) {
    try {
      return await databaseMysql("products").select("*").where("id", id);
    } catch (error) {
      console.log(error);
    }
  }
  async updateById(id, pro) {
    try {
      await databaseMysql("products").update(pro).where("id", id);
      return true;
    } catch (error) {
      console.log(error);
    }
  }
  async getAll() {
    try {
      return await databaseMysql("products").select("*");
    } catch (error) {
      console.log(error);
    }
  }
  async deleteById(id) {
    try {
      await databaseMysql("products").del().where("id", id);
      console.log("El mensaje ha sido borrado con exito.");
      return true;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteAll() {
    try {
      await databaseMysql("products").del();
      console.log("Mensajes borrados con exito");
      return true;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Contenedor;
