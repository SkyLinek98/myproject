var pg = require('pg');

const connectionString = process.env.DATABASE_URL
let print={name:connectionString};
send(print);
const Pool = pg.Pool
const pool = new Pool({
    connectionString,
    max: 10//,
     // ssl: {
       //   require: true, 
         // rejectUnauthorized: false
     // }
})

module.exports = pool;