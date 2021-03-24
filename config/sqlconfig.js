const creds = require("./userconfig");
const sql = require('mysql');

const connection = sql.createPool({
    connectionLimit: 10,
    host: creds.host,
    user: creds.user,
    password: creds.password,
    port: creds.port,
    database: creds.database,
});

module.exports = connection;