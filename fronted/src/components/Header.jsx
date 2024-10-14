import { React, useState } from 'react'
import img from '../assets/logo.png'
import '../css/Header.css'
import Exit from './Exit'

export default function Header({ landing, active, activities, color, plani }) {
  const [exitEmer, setExitEmer] = useState(null)

  function handleShowExit() {
    setExitEmer(true)
  }

  function handleCancel() {
    setExitEmer(false)
  }

  return (
    <div>
      <Exit exitEmer={exitEmer} onCancel={handleCancel} />
      <header className={`header ${color}`}>
        <div className='logo'>
          <img src={img} alt="logoImg" />
        </div>

        {
          <ul className='links'>
            {active ? <li><a href="/" className={landing ? 'link active' : 'link'}>Inicio</a></li> : null}
            {active ? <li><a href="Actividades" className={activities ? 'link active' : 'link'}>Actividades</a></li> : null}
            <li><a href="/calendario" className={plani ? 'link active': 'link'}>Planificación</a></li>
            {active ? <li onClick={() => handleShowExit()}><a href="#" className='link'>Cerrar Sesión</a></li> : <li><a href="Login" className='link'>Iniciar Sesión</a></li>}
            {active ? null : <li><a href="RegisterUser" className='link'>Registrarse</a></li>}
          </ul>
        }
      </header>
    </div>
  )
}
