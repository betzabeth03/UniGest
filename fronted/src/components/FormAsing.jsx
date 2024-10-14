import React, { useEffect, useState } from 'react'
import '../css/FormAdd.css'
import axios from 'axios'
import Cookies from 'js-cookie'
export default function FormAsing() {
    const [sections, setSections] = useState([])
    const [subjects, setSubjects] = useState([])
    const name = Cookies.get('name')
    const id = Cookies.get('id')
    console.log(name)
    async function handleSubmit(e) {
        e.preventDefault()
        const materia = e.target.materia.value
        const seccion = e.target.seccion.value
        const data = {
            idProfesor: id,
            idMaterias: materia,
            idSecciones: seccion
        }
        await axios.post('http://localhost:3000/pms/agregar', data)
            .then((result) => {
                console.log(result)
                window.location.replace('/profesores')
            }).catch((err) => {
                console.log(err)
            });
    }
    useEffect(() => {
        async function getData() {
            await axios.get('http://localhost:3000/materias')
                .then((materias) => {
                    console.log(materias.data.body)
                    setSubjects(materias.data.body)
                }).catch((err) => {
                    console.log(err)
                });
            await axios.get('http://localhost:3000/secciones')
                .then((secciones) => {
                    setSections(secciones.data.body)
                }).catch((err) => {
                    console.log(err)
                });
        }
        getData()
    }, [])
    return (
        <div className='allForm'>
            <form onSubmit={(e) => handleSubmit(e)} className='formAsigProfesor'>
                <label className='activities'> Asignar a {name} </label>
                <div className='divAsing'>
                    <div className='inputAsig'>
                        <label className='nameAsing'>Materia</label>
                        <select name="materia" className='materiaAsing'>
                            {
                                subjects.map((subject, index) => (
                                    <option key={index} value={subject.id}>{subject.nombre}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='inputAsig'>
                        <label className='nameAsing'>Seccion</label>

                        <select name="seccion" className='sectionAsing'>
                            {
                                sections.map((section, index) => (
                                    <option key={index} value={section.id}>{section.nombre}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <input type="submit" value={'Agregar'} className="submitAdd" name="" />
            </form>
        </div>
    )
}