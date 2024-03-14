const AutenticarModelos = require('../models/AutenticacionModelos')
class AutenticarControlador{
    registrarse(userDatos){
        return new Promise((resolve,reject)=>{
            let promesa = AutenticarModelos.registrarse(userDatos)
            if(promesa){
                resolve(promesa)
            }else{
                reject(new Error("Ha ocurrido un error"))
            }
        })
   
        
    }
    login(userDatos){
        return new Promise((resolve,reject)=>{
            let promesa = AutenticarModelos.login(userDatos)
            if(promesa){
                resolve(promesa)
            }else{
                reject(new Error("Ha ocurrido un error"))
            }
        })
    }
    verificar(cookie){
        return new Promise((resolve, reject) => {
            AutenticarModelos.verificar(cookie)
                .then(() => {
                    resolve()
                })
                .catch((error) => {
                    reject(error)
                });
        });
    }
    verificarDirector(cookie){
        return new Promise((resolve, reject) => {
            AutenticarModelos.verificarDirector(cookie)
                .then(() => {
                    resolve()
                })
                .catch((error) => {
                    reject(error)
                });
        });
    }
    logout(cookie){
        return new Promise((resolve, reject) => {
            AutenticarModelos.logout(cookie)
                .then(() => {
                    resolve()
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
 }
module.exports = new AutenticarControlador()