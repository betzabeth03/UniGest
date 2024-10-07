const mysql = require('mysql')
const connection = mysql.createConnection({
    host: process.env.BD_HOST,
    user : process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_NAME
})
connection.connect()
module.exports = connection