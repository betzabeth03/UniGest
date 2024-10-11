import React from 'react'
import FormRegister from '../components/FormRegister'
import '../css/RegisterUser.css'
import img from '../assets/Register.png'
import logo from '../assets/logo.png'

export default function RegisterUser() {
  return (
    <section className='registerForm'>
        <div className='image'>
            <div className='logoRegister'>
                <img src={logo} alt="logo" />
            </div>
            <div className='imageRegister'>
                <img src={img} alt="logoregistro" width='75%'/>
            </div>
        </div>
        <FormRegister/>
    </section>
  )
}
