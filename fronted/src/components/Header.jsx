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
                <li><a href="s" className='link'>Planificación</a></li>
               {active?null:<li><a href="RegisterUser" className='link'>Registrarse</a></li>} 
                
                { active ? <li><a href="s" className='link'>Actividades</a></li> : null }
                { active ? <li><a href="s" className='link'>Inicio</a></li> : null}
                { active ? <li><a href="s" className='link'>Cerrar Sesión</a></li> :<li><a href="Login" className='link'>Iniciar Sesión</a></li>}
            </ul>
        </header>
    </div>
  )
}
