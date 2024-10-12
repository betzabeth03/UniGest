import React from 'react'
import Header from '../components/Header'
import FormAdd from '../components/FormAdd'
import '../css/FormActivitiesAdd.css'

export default function FormActivitiesAdd() {
    const formAddAct = true
  return (
    <div className='addActivities'>
        <Header formAddAct={formAddAct}/>
        <div className='addAct'>
          <FormAdd/>        
        </div>
    </div>
  )
}
