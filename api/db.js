const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'eduquest',
    password: 'J@nshree1227',
    port: 5432,
  });
  

module.exports = pool;
