const e = require('express')
const RelacionesModelos = require('../models/RelacionesModelos')

class RelacionesControladores{
    crear(datos){
        return new Promise((resolve,reject)=>{
            let promesa = RelacionesModelos.crear(datos)
            if(promesa){
                resolve(promesa)
            }else{
                reject(e)
            }
        })
       
    }
    editar(id,datos){
        return new Promise((resolve,reject)=>{
            let promesa = RelacionesModelos.editar(id,datos)
            if(promesa){
                resolve(promesa)
            }else{
                reject(e)
            }
        })
    }
    profesores_materias(){
        return new Promise((resolve,reject)=>{
            let promesa = RelacionesModelos.profesores_materias()
            if(promesa){
                resolve(promesa)
            }else{
                reject(e)
            }
        })
    }
    profesores_materias_secciones(){
        return new Promise((resolve,reject)=>{
            let promesa = RelacionesModelos.profesores_materias_secciones()
            if(promesa){
                resolve(promesa)
            }else{
                reject(e)
            }
        })
    }
}
module.exports=new RelacionesControladores();