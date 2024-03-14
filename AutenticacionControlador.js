const AutenticarModelos = require('../models/AutenticacionModelos')
class AutenticarControlador{
    registrarse(userDatos){
        return new Promise((resolve,reject)=>{
            AutenticarModelos.registrarse(userDatos)
            .then(() => {
                resolve()
            })
            .catch((error) => {
                reject(error)
            });
        });
    }

    login(userDatos){
        return new Promise((resolve,reject)=>{
            AutenticarModelos.login(userDatos)
            .then(() => {
                resolve()
            })
            .catch((error) => {
                reject(error)
            });
        });
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