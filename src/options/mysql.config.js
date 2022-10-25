const dotenv = require("dotenv");
dotenv.config();
const options = {
  client: 'mysql',
  connection: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
  useNullAsDefault:true
};

module.exports = options;
