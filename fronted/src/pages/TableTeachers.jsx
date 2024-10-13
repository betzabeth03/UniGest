import React from 'react'
import Tables from '../components/Tables'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import '../css/TableTeacher.css'


export default function TableTeachers() {
  return (
    <div>
      <section className='teacher'>
        <Menu />
        <article className='tableTeacher'>
          <Tables uri="profesores" />

        </article>
      </section>
      <Footer />

    </div>
  )
}
