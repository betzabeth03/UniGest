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
    login(userDatos){
        return new Promise((resolve,reject)=>{
            const user = userDatos.user
            const pass = userDatos.pass 
            if(!user || !pass){
                reject(new Error("No se pueden pasar valores vacios"))
            }else{
                let consulta = `SELECT * FROM usuarios WHERE user_name = ?`
                conexion.query(consulta,[user],async function(error,results,fields){
                    if (error) {
                        reject(error)
                    }
    
                    if (results.length === 0) {
                        reject(new Error("Usuario no encontrado"))
                    }
    
                    try {
                        let comparacion = await bcryptjs.compare(pass, results[0].password);
                        if (comparacion) {
                            const id = results[0].id
                            const tipo = results[0].tipo
                            const nombre = results[0].nombre
                            const token = jwt.sign({ id: id,tipo:tipo,nombre:nombre }, process.env.JWT_SECRETO);
                            resolve(token)
                        } else {
                            reject(new Error("Contraseña incorrecta"))
                        }
                    } catch (error) {
                        reject(error)
                    }
                });
            }
        
    })  
   }
   verificar(cookie){
    return new Promise((resolve, reject) => {
        if (cookie) {
            try {
                const decodificado = jwt.verify(cookie, process.env.JWT_SECRETO);
                let consulta = `SELECT * FROM usuarios WHERE id = ?`;
                conexion.query(consulta, [decodificado.id], function(error, results, fields) {
                    if (error) {
                        reject(error)
                    } else {
                        if (!results || results.length === 0) {
                            reject(new Error("Usuario no encontrado"))
                        } else {
                            resolve()
                        }
                    }
                });
            } catch (error) {
                reject(error)
            }
        } else {
            reject(new Error("No se proporcionó ningún token"))
        }
    })
}
verificarDirector(cookie){
    return new Promise((resolve, reject) => {
        if (cookie) {
            try {
                const decodificado = jwt.verify(cookie, process.env.JWT_SECRETO);
                let consulta = `SELECT * FROM usuarios WHERE id = ?`;
                conexion.query(consulta, [decodificado.id], function(error, results, fields) {
                    if (error) {
                        reject(error)
                    } else {
                        if (!results || results.length === 0) {
                            reject(new Error("Usuario no encontrado"))
                        } else {
                            if(decodificado.tipo == "director"){
                                resolve()
                            }else{
                                reject(new Error("Necesitas el rango director para modificar"))
                            }
                        }
                    }
                });
            } catch (error) {
                reject(error)
            }
        } else {
            reject(new Error("No se proporcionó ningún token"))
        }
    })
}
logout(cookie){
    return new Promise((resolve,reject)=>{
        if(!cookie){
            reject(new Error("No has iniciado sesion"))
        }else{
            resolve()
        }
    })
}
}
module.exports = new AutenticarModelos()