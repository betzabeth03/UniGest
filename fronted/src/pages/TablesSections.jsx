import React, {useEffect} from 'react'
import Tables from "../components/Tables";
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import '../css/TableViewDirector.css'
import logo from '../assets/logo.png'
import Cookies from 'js-cookie'
import axios from 'axios';
export default function TablesSections() {
  const token = Cookies.get('jwt')
  useEffect(() => {
    async function getData(token) {
      await axios.get(`http://localhost:3000/verify/${token}`)
        .then((result) => {
          console.log(result.data.user)
        })
        .catch((err) => {
          console.log(err)
          window.location.replace('/Error401')
        })
    }
    getData(token)
  }, [token])
  const btActive = 'activeMenu'
  return (
    <div>
      <section className='mainTable'>
        <div className='logoDirector'>
          <img src={logo} alt="" width={"80%"} />
        </div>
        <Menu btSeccion={btActive} />
        <article className='tableGeneral'>
          <Tables uri="secciones" />

        </article>
      </section>
      <Footer />
    </div>
  )
}
