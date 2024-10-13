import React from 'react'
import img from '../assets/logo.png'
import '../css/Header.css'
import Cookies from 'js-cookie'

export default function Header({landing, active, activities, color}) {
  async function logout() {
    Cookies.remove('jwt')
    window.location.replace('/')
  }

  return (
    <div>
        <header className={`header ${color}`}>
            <div className='logo'>
                <img src={img} alt="logoImg" />
            </div>

            { 
              <ul className='links'>
               { active ? <li><a href="/" className={landing ? 'link active' : 'link'}>Inicio</a></li> : null}
               { active ? <li><a href="Actividades" className={activities ? 'link active': 'link'}>Actividades</a></li> : null }
               <li><a href="s" className='link'>Planificación</a></li>
               { active ? <li onClick={()=>logout()}><a href="/" className='link'>Cerrar Sesión</a></li> :<li><a href="Login" className='link'>Iniciar Sesión</a></li>}
              { active ? null :<li><a href="RegisterUser" className='link'>Registrarse</a></li>} 
           </ul> 
            }
        </header>
    </div>
  )
}
