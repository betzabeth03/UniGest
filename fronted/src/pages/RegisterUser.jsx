import React from 'react'
import FormRegister from '../components/FormRegister'
import '../css/RegisterUser.css'
import img from '../assets/Register.png'
import logo from '../assets/logo.png'

export default function RegisterUser() {
  return (
    <section className='registerForm'>
      <a href='/' className="back">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
        </svg>
      </a>
      <div className='image'>
        <div className='logoRegister'>
          <img src={logo} alt="logo" />
        </div>
        <div className='imageRegister'>
          <img src={img} alt="logoregistro" width='75%' />
        </div>
      </div>
      <FormRegister />
    </section>
  )
}
