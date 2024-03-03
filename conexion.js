const e = require('express')
const mysql = require('mysql')
const conexion = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: '',
    database: 'sistemadegestionadministrativa'
})
conexion.connect()
module.exports = conexion