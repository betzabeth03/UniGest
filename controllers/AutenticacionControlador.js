const AutenticarModelos = require('../models/AutenticacionModelos')
class AutenticarControlador{
    registrarse(userDatos){
        return new Promise((resolve,reject)=>{
            let promesa = AutenticarModelos.registrarse(userDatos)
            console.log("entre al controlador")
            if(promesa){
                resolve(promesa)
            }else{
                reject(new Error("Ha ocurrido un error"))
            }
        })
        
        
    }
}
module.exports = new AutenticarControlador()