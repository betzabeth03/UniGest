import React from 'react'
import Header from '../components/Header'
import TextBox from '../components/TextBox'
import Footer from '../components/Footer'
import '../css/Landing.css'

const active = null


export default function Landing() {
  return (
    <div className='landing'>
        <Header active={active}/>

        <section className='mainLanding'>
            <TextBox
            title={['Bienvenido a UniGest']}
            text={['Un sistema de gestión administrativo para la educación']}
            clas='textLanding'
            />

            <article className='description'>
            <TextBox
                title={['¡Registrate!']}
                text={['La mejor manera de organizarte']}
                clas='textRegister'
            />
            <div className='textDescription'>
                <h1></h1>
                <p><b>Unigest</b> es un sistema realizado con el objetivo de proporcionales una herramienta que facilite la organización, y la planificación de actividades, con fines educativos</p>
            </div>
            </article>
        </section>
        <Footer/>
    </div>
  )
}
