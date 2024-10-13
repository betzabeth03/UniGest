import React from 'react'
import Tables from "../components/Tables";
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import '../css/TableViewDirector.css'
import logo from '../assets/logo.png'

export default function TablesSubjects() {
  const btActive = 'activeMenu'
  return (
    <div>
      <section className='mainTable'>
        <div className='logoDirector'>
          <img src={logo} alt="" width={"80%"} />
        </div>
        <Menu btMateria={btActive}/>
        <article className='tableGeneral'>
          <Tables uri="materias" />

        </article>
      </section>
      <Footer />
    </div>
  )
}
