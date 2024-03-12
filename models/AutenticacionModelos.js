const conexion = require('../conexion')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')

class AutenticarModelos{
         registrarse(userDatos){
        return new Promise(async(resolve,reject)=>{
            console.log("entre")
            const user = userDatos.user
            const nombre = userDatos.nombre
            const pass = userDatos.pass 
            const tipo = userDatos.tipo 
            let passHash = await bcryptjs.hash(pass,8)
            let consulta = `INSERT INTO usuarios (nombre,user_name,password,tipo,id) VALUES ('${nombre}','${user}','${passHash}', '${tipo}', "")`
            conexion.query(consulta,function(error,results,fields){
                if(error){
                    reject(error)
                }else{
                    resolve(results)
                }
            })
        })
     
    }
}
module.exports = new AutenticarModelos()