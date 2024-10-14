import {React,useState,useEffect} from 'react'
import FormAdd from '../components/FormAdd'
import Menu from '../components/Menu'
import '../css/FormActivitiesAdd.css'
import axios from 'axios'
import Cookies from 'js-cookie'

export default function FormActivitiesAdd() {
  const btActive = 'activeMenu'
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
                  window.location.replace('/')
              })
      }
      getData(token)
  }, [token])




  return (
    <div className='directorView'>
        <Menu btSeccion={btActive}/>
        <div className='formGeneral'>
          <FormAdd
          uri = "secciones"
          propiedades = {["el nombre","el periodo academico"]}
          />        
        </div>
    </div>
  )
}
