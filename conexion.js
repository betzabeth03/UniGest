const e = require('express')
const mysql = require('mysql')
const conexion = mysql.createConnection({
    host: process.env.BD_HOST,
    user : process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_NAME
})
conexion.connect()
module.exports = conexion