const { Pool } = require('pg');

const pool = new Pool({
  user: 'igorsu', //marinokol
  host: '138.68.87.73', //138.68.87.73
  database: 'db_igorsu', // db_marinokol
  password: '>?DhD7cE', // your password
  port: 5432, // 5432
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
}
