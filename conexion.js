const e = require('express')
const mysql = require('mysql')
const conexion = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: '',
    database: 'materias'
})
conexion.connect()

// module.exports = mysql
module.exports = conexion