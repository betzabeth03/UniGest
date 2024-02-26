const mysql = require('mysql')
const conexion = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: '',
    database: 'materias'
})
conexion.connect()
conexion.query('SELECT * FROM profesores', function(error,results,fields){
if(error){
    throw error
}else{console.log(results)}
})
let sql = "INSERT INTO profesores (nombre, CI, id) VALUES ('Rafael','1213','1')"
conexion.query(sql,function(error,results,field){
    if(error){
        throw error
    }else{
        console.log(results)
    }
})
conexion.end()
// actualiacion de git