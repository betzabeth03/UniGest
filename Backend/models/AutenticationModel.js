const connection = require("../connection")
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
require('dotenv').config();



class AutenticationModels{
         Register(userData){
        return new Promise(async(resolve,reject)=>{
            console.log(userData)
            const user = userData.user
            const password = userData.password 
            const rol = userData.rol
            const registerpass = userData.registerpass
            if(registerpass === process.env.REGISTERPROFESSOR&&rol=="Profesor" || registerpass === process.env.REGISTERDIRECTOR&&rol=="Director"){
                let passwordHash = await bcryptjs.hash(password,8)
                let consult = `INSERT INTO users (userName,password,rol) VALUES ('${user}','${passwordHash}', '${rol}')`
                connection.query(consult,function(error,results,fields){
                    if(error){
                        reject(error)
                    }else{
                        resolve(results)
                    }
                })
            }else{
                reject(new Error("No tiene permisos para registrarse"))
            }
        })
     
    }
    Login(userData){
        return new Promise((resolve,reject)=>{
            const user = userData.user
            const password = userData.password 
            if(!user || !password){
                reject(new Error("No se pueden pasar valores vacios"))
            }else{
                let consult = `SELECT * FROM users WHERE userName = ?`
                connection.query(consult,[user],async function(error,results,fields){
                    if (error) {
                        reject(error)
                    }
    
                    if (results.length === 0) {
                        reject(new Error("Usuario no encontrado"))
                    }
                    try {
                        
                        let comparation = await bcryptjs.compare(password, results[0].password);
                        if (comparation) {
                            const id = results[0].id
                            const rol = results[0].rol
                            const userName = results[0].userName
                            const token = jwt.sign({ id: id, userName:userName, rol:rol  }, process.env.JWT_SECRET);
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
   Verify(cookie){
    return new Promise((resolve, reject) => {
        if (cookie) {
            try {
                const decoded = jwt.verify(cookie, process.env.JWT_SECRET);
                let consult = `SELECT * FROM users WHERE id = ?`;
                connection.query(consult, [decoded.id], function(error, results, fields) {
                    if (error) {
                        reject(error)
                    } else {
                        if (!results || results.length === 0) {
                            reject(new Error("Usuario no encontrado"))
                        } else {
                            resolve(results[0].userName)
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

Logout(cookie){
    return new Promise((resolve,reject)=>{
        if(!cookie){
            reject(new Error("No has iniciado sesion"))
        }else{
            resolve()
        }
    })
}

}
module.exports = new AutenticationModels()