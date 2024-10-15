import { React} from 'react'
import Menu from '../components/Menu'
import FormAdd from '../components/FormAdd'
import Footer from '../components/Footer'
import '../css/FormActivitiesAdd.css'
import logo from '../assets/logo.png'

export default function FormActivitiesAdd() {
  const btActive = 'activeMenu'

  return (
    <div>
      <div className='directorView'>
        <div className='logoDirectorSolo'>
          <img src={logo} alt="" width={"80%"} />
        </div>
        <Menu btProfesores={btActive} />
        <div className='formGeneral'>
          <FormAdd
            uri="profesores"
            propiedades={["el nombre", "el apellido"]}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}
