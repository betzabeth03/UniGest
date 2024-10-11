import React from 'react'
import img from '../assets/logo.png'
import '../css/Header.css'

export default function Header({active}) {
  return (
    <div>
        <header className='header'>
            <div className='logo'>
                <img src={img} alt="logoImg" />
            </div>
            <ul className='links'>
                <li><a href="" className='link'>Planificación</a></li>
                <li><a href="" className='link'>Iniciar Sesión</a></li>
                <li><a href="" className='link'>Registrarse</a></li>
                
                { active ? <li><a href="" className='link'>Actividades</a></li> : null }
                { active ? <li><a href="" className='link'>Inicio</a></li> : null}
                { active ? <li><a href="" className='link'>Cerrar Sesión</a></li> : null }
            </ul>
        </header>
    </div>
  )
}
