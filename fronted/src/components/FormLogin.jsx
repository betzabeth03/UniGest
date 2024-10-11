import React, {useState} from 'react'
import '../css/FormLogin.css'
import logoSolo from '../assets/logoSolo.png'
import axios from 'axios'
import Cookies from 'js-cookie'
export default function FormLogin() {
  const [error,setError] = useState(null)
  function handleSubmit(e){
    e.preventDefault()
    const data = {
      user: e.target.user.value,
      password: e.target.pass.value
    }
    axios.post('http://localhost:3000/login',data)
    .then((result) => {
      const token = result.data
         Cookies.set('jwt', token, { expires: 1 })
         window.location.href = '/'
    }).catch((err) => {
      if(err.response){
        console.log(err.response.data.error)
        setError(err.response.data.error)
    }
    });
  }
  return (
    <div>
        <div className='imageLogin'>
            <img src={logoSolo} alt="logoSolo" width='40%'/>
        </div>
    <form onSubmit={(e)=>handleSubmit(e)} className='loginForm'>
        <input className='inputLogin' type="text" placeholder='Usuario' name='user'/>
        <input className='inputLogin' type="password" placeholder='Contraseña' name="pass"/>
        {
          error? <div> {error} </div>:<div></div>
        }
        <input className='submitLogin' type="submit" value='Iniciar Sesión'/>
        <p className='registerLogin'>
            ¿No estás registrado?  
        <a href="RegisterUser"> Registrarse</a>
        </p>
    </form>
    </div>
  )
}
