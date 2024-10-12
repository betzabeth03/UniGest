import React from 'react'
import logoSolo from '../assets/logoSolo.png'
import '../css/FormAdd.css'

export default function FormAdd() {
  return (
    <div className='formAll'>
        <div className='logoAdd'>
          <img src={logoSolo} alt="" width="80%"/>
          <h1>UniGest</h1>
        </div>
        <form action="" className='formAdd'>
            <label className='activities'>Actividades</label>
            <input type="text" className='inputAdd' placeholder='Ingrese el nombre'/>
            <input type="text" className='inputAdd' placeholder='Ingrese la materia'/>
            <input type="text" className='inputAdd' placeholder='Ingrese la seccion'/>
            <input type="text" className='inputAdd' placeholder='Ingrese la semana'/>
            <input type="submit" value={'Agregar'} className="submitAdd" name="" id="" />
        </form>
    </div>
  )
}
