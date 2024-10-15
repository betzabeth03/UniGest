import { React} from 'react'
import Menu from '../components/Menu'
import '../css/FormActivitiesAdd.css'
import FormAsing from '../components/FormAsing'
import logo from '../assets/logo.png'
import Footer from '../components/Footer'


export default function FormActivitiesAdd() {
  const btActive = 'activeMenu'
  return (
    <>
      <div className='directorView'>
        <div className='logoDirectorSolo'>
          <img src={logo} alt="" width={"80%"} />
        </div>
        <Menu btProfesores={btActive} />
        <div className='formGeneral'>
          <FormAsing
          />
        </div>
      </div>
      <Footer />
    </>
  )
}
