const {Pool} = require('pg');


const pool = new Pool({
    host: 'localhost',
    user : 'postgres',
    password: 'Admin123ask',
    database: 'AIRLINE',
    port: '5432'
})




module.exports = pool;