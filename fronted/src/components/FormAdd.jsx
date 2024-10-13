import React from 'react'
import logoSolo from '../assets/logoSolo.png'
import '../css/FormAdd.css'
import axios from 'axios'
export default function FormAdd(props) {
  async function handleSubmit(e) {
    e.preventDefault()
    let obj = {}
    props.propiedades.forEach((element) => {
      const key = element.split(" ")[1]
      obj[key] = e.target[key].value
    })
    await axios.post(`http://localhost:3000/${props.uri}/agregar`,obj)
    .then((result) => {
      console.log(result)
      window.location.replace(`/${props.uri}`)
    }).catch((err) => {
      console.log(err)
    });
  }
  return (
    <div className='formAll'>
        <div className='logoAdd'>
          <img src={logoSolo} alt="" width="100%"/>
          <h1>UniGest</h1>
        </div>
        <form onSubmit={(e)=>handleSubmit(e)} className='formAdd'>
            <label className='activities'> {props.uri.charAt(0).toUpperCase() + props.uri.slice(1)} </label>
            {props.propiedades.map((element,index)=>(
              <div key={index}>
                <input type="text" placeholder={`Ingresa ${element}`}  name={element.split(" ")[1]} className='inputAdd' />
              </div>
            ))}
            <input type="submit" value={'Agregar'} className="submitAdd" name="" />
        </form>
    </div>
  )
}
