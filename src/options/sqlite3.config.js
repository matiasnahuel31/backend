const options = {
  client: 'better-sqlite3',
  connection: {
    filename:'./db/mysqlite3.sqlite'
  },
  useNullAsDefault:true
};

module.exports = options;