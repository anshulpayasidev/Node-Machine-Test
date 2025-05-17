const path = require('path');
module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'institute_db',
      multipleStatements: true
    },
    migrations: {
      directory: path.join(__dirname, 'migrations')
    }
  }
}