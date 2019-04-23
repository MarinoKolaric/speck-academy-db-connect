const { Pool } = require('pg');

const pool = new Pool({
  user: 'goranlj', 
  host: '138.68.87.73', 
  database: 'db_goranlj', 
  password: '&>q4CT!D', 
  port: 5432, 
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
}

