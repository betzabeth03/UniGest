import React from 'react'
import '../css/FormRegister.css'

export default function FormRegister() {
  return (
    <form action="" className='form'>
        <h1 className='titleForm'>Bienvenido</h1>
        <input type="text" className='input' placeholder='Usuario'/>
        <input type="password" className='input' name="" id="" placeholder='Contraseña'/>
        <select name="Puesto" id="" className='list'>
            <option className='select' value="Puesto">Puesto</option>
            <option className='select' value="Profesor">Profesor</option>
            <option className='select' value="Director">Director</option>
        </select>
        <input type="text" className='input' placeholder='Clave de registro'/>
        <input type="submit" className='submit' value={'Registrarse'}/>
    </form>
  )
}
