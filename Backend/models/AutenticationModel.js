const connection = require("../connection")
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
require('dotenv').config();
const ProfessorsControllers = require("../controllers/ProfessorsControllers");
const e = require("express");



class AutenticationModels{
         Register(userData){
        return new Promise(async(resolve,reject)=>{
            console.log(userData)
            const name = userData.name
            const lastName = userData.lastName
            const user = userData.user
            const password = userData.password 
            const rol = userData.rol
            const cedulaUser = userData.cedula
            const registerpass = userData.registerpass
            if(registerpass === process.env.REGISTERPROFESSOR&&rol=="Profesor" || registerpass === process.env.REGISTERDIRECTOR&&rol=="Director"){
                let passwordHash = await bcryptjs.hash(password,8)
                let consult = `INSERT INTO users (nombre,apellido,userName,password,rol,cedula) VALUES (' ${name}', '${lastName}','${user}','${passwordHash}', '${rol}','${cedulaUser}  ')`
                connection.query(consult,function(error,results,fields){
                    if(error){
                        reject(error)
                    }else{
                        if(rol === "Profesor"){
                            const data = {
                                nombre:name,
                                apellido:lastName,
                                cedula: cedulaUser
                            }
                            ProfessorsControllers.Create(data)
                            .then((result) => {
                                console.log(result)
                            }).catch((err) => {
                                console.log(err)
                            });
                        }
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
                            const cedula = results[0].cedula
                            const name = results[0].name
                            const userName = results[0].userName
                            const token = jwt.sign({ name:name,id: id, userName:userName, rol:rol, cedula:cedula  }, process.env.JWT_SECRET);
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
                            resolve(results[0])
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
Modify(cedula,values){
    return new Promise((resolve, reject) => {
       let cedulaFront = cedula
       let nombre = values.nombre
       let apellido = values.apellido
       let consult = `UPDATE users SET nombre = '${nombre}', apellido = '${apellido}' WHERE cedula = ${cedulaFront}`
       connection.query(consult, function(err, results, fields) {
        if(err){
            reject(err)
        }else{
            resolve()
        }
       })
    })
}

}
module.exports = new AutenticationModels()