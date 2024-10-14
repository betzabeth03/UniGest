import React, { useState } from "react";
import '../css/FormRegister.css'
import axios from "axios";
import Cookies from 'js-cookie'

export default function FormRegister() {
    const [error, setError] = useState(null)
    async function handleSubmit(e) {
        e.preventDefault();
        const data = {
            user: e.target.user.value,
            password: e.target.password.value,
            rol: e.target.puesto.value,
            registerpass: e.target.registerpass.value
        }
        await axios.post('http://localhost:3000/register', data)
            .then(async () => {
                await axios.post('http://localhost:3000/login', data)
                    .then((result) => {
                        const token = result.data
                        Cookies.set('jwt', token, { expires: 1 })
                        window.location.href = '/'
                    })
                    .catch((err) => {
                        if (err.response) {
                            console.log(err.response.data.error)
                        }
                    })
            })
            .catch((err) => {
                console.log(err.response.data.error)
                setError(err.response.data.error)
            })
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)} className='form'>
            <h1 className='titleForm'>Bienvenido</h1>
            <input type="text" className='input' placeholder='Usuario' name="user" autoComplete="off" required />
            <input type="password" className='input' name="password" placeholder='Contraseña' autoComplete="off" required />
            <select name="puesto" id="" className='list' required>
                <option className='select' value="Puesto">Puesto</option>
                <option className='select' value="Profesor">Profesor</option>
                <option className='select' value="Director">Director</option>
            </select>
            <input type="password" className='input' placeholder='Clave de registro' name="registerpass" autoComplete="off" required />
            {
                error ? <div className="error">{error}</div>
                    : <></>
            }
            <input type="submit" className='submit' value={'Registrarse'} />

        </form>
    )
}
