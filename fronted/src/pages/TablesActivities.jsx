import { React, useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Tables from "../components/Tables";
import Menu from '../components/Menu';
import '../css/TablesActivities.css'
import '../css/TableViewDirector.css'
import axios from 'axios'
import Cookies from 'js-cookie'
import logo from '../assets/logo.png'


export default function TablesActivities() {
  const activities = true
  const btActive = 'activeMenu'
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
    <div className='activitiesView'>

      {
        active == 'Director' ?
          <>
            <section className='teacher'>
              <div className='logoDirector'>
                <img src={logo} alt="" width={"80%"} />
              </div>
              <Menu btActividades={btActive}/>
              <article className='tableTeacher'>
                <Tables uri="actividades" />

              </article>
            </section>
            <Footer />
          </>
          : <>
            <Header active={active} color={color} activities={activities} />
            <section className='tableActivities'>
              <article className='tableShow'>
                <Tables
                  uri="actividades"
                />
              </article>

            </section>
            <Footer />
          </>
      }
    </div>
  )
}
