import React from 'react'
import Menu from '../components/Menu'
import TextBox from '../components/TextBox'
import Footer from '../components/Footer'
import logo from '../assets/logo.png'
import '../css/DirectorLanding.css'

export default function LandingDirector() {
  const btActive = 'activeMenu'

  return (
    <div>
      <section className='directorMain'>
        <div className='logoDirector'>
          <img src={logo} alt="" width={"80%"}/>
        </div>
        <Menu btIni={btActive}/>
        <article className='welcomeDirector'>
          <TextBox title={['Bienvenido a UniGest']}
            span={['¡Bienvenido al sistema de gestion administrativo!']}
            text={['Nos complace darte la bienvenida como director. Este sistema está diseñado para facilitar la gestión administrativa, mejorar la comunicación entre docentes y estudiantes. Aquí podrá acceder a herramientas que le permitirán supervisar actividades académicas, colaborar con su equipo y fomentar un ambiente de aprendizaje positivo']}
            clas='textLandindDirector'
          />
        </article>

      </section>
      <Footer />
    </div>
  )
}
