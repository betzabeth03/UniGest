import React from 'react'
import Header from '../components/Header'
import Formmodify from '../components/Formmodify'
import '../css/FormActivitiesAdd.css'


export default function FormModifyActivities() {
  return (
    <div className='addActivities'>
        <Header/>
        <div className='addAct'>
            <Formmodify/>        
        </div>
    </div>

  )
}
