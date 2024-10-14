import React from 'react'
import Tables from "../components/Tables";
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import '../css/TableViewDirector.css'
import logo from '../assets/logo.png'


export default function TablesSections() {
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
