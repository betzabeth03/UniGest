import {React, useState, useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Tables from "../components/Tables";
import '../css/TablesActivities.css'
import axios from 'axios'
import Cookies from 'js-cookie'


export default function TablesActivities() {
  const activities = true
  const color = 'blue'
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
    <div>
      <Header active={active} color={color} activities={activities}/>
      <section className='tableActivities'>
        <Tables
          uri="actividades"
        />

      </section>
      <Footer />
    </div>
  )
}
