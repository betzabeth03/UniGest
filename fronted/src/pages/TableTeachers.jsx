import React from 'react'
import Tables from '../components/Tables'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import '../css/TableViewDirector.css'
import logo from '../assets/logo.png'


export default function TableTeachers() {
  const btActive = 'activeMenu'
  return (
    <div>
      <section className='teacher'>
        <div className='logoDirector'>
          <img src={logo} alt="" width={"80%"} />
        </div>
        <Menu btProfesores={btActive}/>
        <article className='tableTeacher'>
          <Tables uri="profesores" />

        </article>
      </section>
      <Footer />

    </div>
  )
}
