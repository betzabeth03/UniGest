const e = require('express')
const mysql = require('mysql')
const conexion = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: '',
    database: 'materias'
})
conexion.connect()

// Hola
module.exports = conexion