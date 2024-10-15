import { React, useState, useEffect } from 'react'
import FormAdd from '../components/FormAdd'
import Menu from '../components/Menu'
import '../css/FormActivitiesAdd.css'
import Footer from '../components/Footer'
import axios from 'axios'
import Cookies from 'js-cookie'
import logo from '../assets/logo.png'


export default function FormActivitiesAdd() {
  const btActive = 'activeMenu'
  const token = Cookies.get('jwt')
  const [active, setActive] = useState(null)
  useEffect(() => {
    async function getData(token) {
      await axios.get(`http://localhost:3000/verify/${token}`)
        .then((result) => {
          setActive(result.data.user.rol)
        })
        .catch((err) => {
          console.log(err)
          window.location.replace('/')
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
        <Menu btSeccion={btActive} />
        <div className='formGeneral'>
          <FormAdd
            uri="secciones"
            propiedades={["el nombre", "el periodo academico"]}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}
