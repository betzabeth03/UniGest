import React, { useState,useEffect} from 'react'
import Header from '../components/Header'
import TextBox from '../components/TextBox'
import Footer from '../components/Footer'
import '../css/Landing.css'
import axios from 'axios'
import Cookies from 'js-cookie'

export default  function Landing() {
  const token = Cookies.get('jwt')
  const [active, setActive] = useState(null)
  useEffect(()=>{
    async function getData(token) {
      await axios.get(`http://localhost:3000/verify/${token}`)
      .then((result)=>{
        setActive(result.data.rol)
      })
      .catch((err)=>{
        console.log(err)
      }) 
    }
    getData(token)
  },[token])
  return (
    
    <div className='landing'>
        <Header active={active}/>
    <p> {active} </p>
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
                <p><b>Unigest</b> es un sistema realizado con el objetivo de proporcionales una herramienta que facilite la organización, y la planificación de actividades, con fines educativos</p>
            </div>
            </article>
        </section>
        <Footer/>
    </div>
  )
}
