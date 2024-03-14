const e = require('express')
const RelacionesModelos = require('../models/RelacionesModelos')

class RelacionesControladores{
    crear(datos){
        return new Promise((resolve,reject)=>{
             RelacionesModelos.crear(datos)
             .then(() => {
                resolve()
            })
            .catch((error) => {
                reject(error)
            });
        });
    }

    editar(id,datos){
        return new Promise((resolve,reject)=>{
            RelacionesModelos.editar(id,datos)
            .then(() => {
                resolve()
            })
            .catch((error) => {
                reject(error)
            });
        });
    }

    profesores_materias(){
        return new Promise((resolve,reject)=>{
            RelacionesModelos.profesores_materias()
            .then((results) => {
                resolve(results)
            })
            .catch((error) => {
                reject(error)
            });
        });
    }

    profesores_materias_secciones(){
        return new Promise((resolve,reject)=>{
            RelacionesModelos.profesores_materias_secciones()
            .then((results) => {
                resolve(results)
            })
            .catch((error) => {
                reject(error)
            });
        });
    }

    secciones_eventos(){
        return new Promise((resolve,reject)=>{
            RelacionesModelos.secciones_eventos()
             .then((results) => {
                resolve(results)
            })
            .catch((error) => {
                reject(error)
            });
        });
    }

    materias_actividades(){
        return new Promise((resolve,reject)=>{
            RelacionesModelos.materias_actividades()
            .then((results) => {
                resolve(results)
            })
            .catch((error) => {
                reject(error)
            });
        });
    }

    profesores_materias_secciones_actividades(){
        return new Promise((resolve,reject)=>{
            RelacionesModelos.profesores_materias_secciones_actividades()
            .then((resultados) => {
                resolve(resultados)
            })
            .catch((error) => {
                reject(error)
            });
        });
    }
}

module.exports=new RelacionesControladores();