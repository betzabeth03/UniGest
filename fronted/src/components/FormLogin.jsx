import React from 'react'
import '../css/FormLogin.css'
import logoSolo from '../assets/logoSolo.png'

export default function FormLogin() {
  return (
    <div>
        <div className='imageLogin'>
            <img src={logoSolo} alt="logoSolo" width='40%'/>
        </div>
    <form action="" className='loginForm'>
        <input className='inputLogin' type="text" placeholder='Usuario'/>
        <input className='inputLogin' type="password" placeholder='Contraseña'/>
        <input className='submitLogin' type="submit" value='Iniciar Sesión'/>
        <p className='registerLogin'>
            ¿No estás registrado?  
        <a href="RegisterUser"> Registrarse</a>
        </p>
    </form>
    </div>
  )
}
