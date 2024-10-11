import React, { useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie'
// import '../css/FormRegister.css'

function FormRegister(){

    const [error, setError] = useState(null)
    async function handleSubmit(e){
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            user: e.target.user.value,
            password: e.target.password.value
        }
        await axios.post('http://localhost:8000/register',data)
       .then(async() => {
        await axios.post('http://localhost:8000/login',data)
        .then((result) => {
         const token = result.data
         Cookies.set('jwt', token, { expires: 1 })
         window.location.href = '/'
        })
        .catch((err) => {
         if(err.response){
             console.log(err.response.data.error)
         }
     })
       })
       .catch((err) => {
        console.log(err.response.data.error)
        setError(err.response.data.error) 
    })
    }

    return(
        
        <div className="register">
            <div className="svg">
            <a href="/" className="home"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
            </svg></a>
            </div>
            

            <article className="logo-register">
                {/* <ImageBox
                    url={logo_register}
                    alt="logo-register"
                    class='image-register'
                ></ImageBox> */}
            </article>
            <article className="article-form">
                <form onSubmit={(e)=>handleSubmit(e)} className="form-register">
                    <h1 className="title-register">Crea tu cuenta</h1>
                    <input type="input" placeholder="Nombre" name="name" required className="input-register"></input>
                    <input type="input" placeholder="Usuario" name="user" required className="input-register"></input>
                    <input type="password" placeholder="Contraseña" name="password" required className="input-register"></input>
                    <select name="rol" id="">
                        <option value="admin">Admin</option>
                        <option value="profesor">Profesor</option>
                    </select>
                    {
                        error ?<div className="error">{error}</div>
                        : <></>
                    }
                    <button type="submit" className="bt-register">Registrarse</button>
                </form>
                
            </article>
            
        </div>
    )
}
export default FormRegister