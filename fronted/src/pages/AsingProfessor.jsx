import { React, useState, useEffect } from 'react'
import Menu from '../components/Menu'
import '../css/FormActivitiesAdd.css'
import axios from 'axios'
import Cookies from 'js-cookie'
import FormAsing from '../components/FormAsing'
import logo from '../assets/logo.png'
import Footer from '../components/Footer'


export default function FormActivitiesAdd() {
  const btActive = 'activeMenu'
  const token = Cookies.get('jwt')
  const [active, setActive] = useState(null)
  useEffect(() => {
    async function getData(token) {
      await axios.get(`http://localhost:3000/verify/${token}`)
        .then((result) => {
          setActive(result.data.rol)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    getData(token)
  }, [token])




  return (
    <>
      <div className='directorView'>
        <div className='logoDirectorSolo'>
          <img src={logo} alt="" width={"80%"} />
        </div>
        <Menu btProfesores={btActive} />
        <div className='formGeneral'>
          <FormAsing
          />
        </div>
      </div>
      <Footer />
    </>
  )
}
