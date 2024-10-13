import React, { useEffect, useState } from "react";
import axios from 'axios'
import '../css/Tables.css'
import Cookies from 'js-cookie'
export default function Tables(props) {
  const [data, setData] = useState([])
  const [propertyName, setPropertyName] = useState([])
  const [nextData, setNextData] = useState([])
  const [previusData, setPreviusData] = useState([])
  const [allData, setAllData] = useState([])
  const [clicked, setClicked] = useState(false)
  const [role, setRole] = useState(null)
  const token = Cookies.get('jwt')
  function getNextData() {
    if (nextData.length > 0) {
      setPreviusData([...previusData, ...data]);
      setData(nextData.slice(0, 4));
      setNextData(nextData.slice(4));
    }

  }
  function getPreviusData() {
    if (previusData.length > 0) {
      setNextData([...data, ...nextData])
      const previousSlice = previusData.slice(-4)
      setData(previousSlice)
      setPreviusData(previusData.slice(0, -4))
    }
  }
  function getOneElement(e) {
    e.preventDefault()
    setClicked(true)
    let element = e.target.element.value
    let arrTemp = []
    arrTemp.push(allData.find((elements) => {
      return Number(elements.id) === Number(element)
    }))
    if (arrTemp[0] === undefined) {
      alert('No existe el elemento')
    } else {
      setData(arrTemp)
    }
  }
  function getClicked() {
    if (clicked) {
      setData(allData.slice(0, 4))
      setClicked(false)
    } else {
      setClicked(true)
    }
  }
  async function deleteElement(e) {
    let id = e.target.name
    let verify = prompt("¿Realmente desea eliminar este elemento?(Y/N)")
    if (verify.toLowerCase() === "y") {
      await axios.delete(`http://localhost:3000/${props.uri}/eliminar/${id}`)
        .then(() => {
          window.location.reload()
        }).catch((err) => {
          console.log(err)
        });
    }
  }
  useEffect(() => {
    async function getData() {
      await axios.get(`http://localhost:3000/${props.uri}`)
        .then((result) => {
          setData(result.data.body.slice(0, 4))
          setAllData(result.data.body)
          setPropertyName(Object.getOwnPropertyNames(result.data.body[0]))
          if (result.data.body.length > 4) {
            setNextData(result.data.body.slice(4))
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
    async function verify() {
      await axios.get(`http://localhost:3000/verify/${token}`)
        .then((result) => {
          setRole(result.data.rol)
        }).catch((err) => {
          console.log(err)
        });
    }
    verify()
    getData()
  }, [props.uri, token])

  return (
    <>
      <div className="center">
        <div className="headTable">
          <h1 className="titleTable">
            {props.uri}
          </h1>
          <div className="addSearch">
            <form onSubmit={(e) => getOneElement(e)} className="formtable">
              <button type="submit" className="searchButton">Buscar</button>
              <div className="search">
                <input type="number" name="element" placeholder="ID" className="inputSearch" />
                <svg xmlns="http://www.w3.org/2000/svg" width="1vw" height="1vw" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </div>
            </form>
            {(role === "Director") || (role === "Profesor" && props.uri === "actividades") ? <button onClick={() => window.location.replace(`/Agregar${props.uri}`)} className="addButton">Agregar</button> : null}
            {clicked
              ? <button onClick={() => getClicked()} className="addButton">Quitar Busqueda</button>
              : null
            }
          </div>
        </div>

        <table>
          <thead>
            <tr>

              {propertyName.map((property, index) => (
                <th key={index}>
                  {property}
                </th>

              ))}
              {(role === "Director") || (role === "Profesor" && props.uri === "actividades") ? <th>Accion</th> : null}
            </tr>
          </thead>
          <tbody>
            {data.map((item, rowIndex) => (
              <tr key={rowIndex}>
                {propertyName.map((property, colIndex) => (
                  <td key={colIndex}>{item[property]}</td>
                ))}
                <td>
                  {(role === "Director") || (role === "Profesor" && props.uri === "actividades") ?
                    <div className="buttonsTable">
                      <button className="tableButton"><svg xmlns="http://www.w3.org/2000/svg" width="2vw" height="2vw" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                      </svg></button>
                      <button onClick={(e) => deleteElement(e)} name={item.id} className="tableButton"><svg xmlns="http://www.w3.org/2000/svg" width="2vw" height="2vw" fill="red" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                      </svg></button>
                    </div>
                    : null
                  }

                </td>
              </tr>
            ))}
            <tr>
              <td>
                {previusData.length > 0 ? <button onClick={() => getPreviusData()}>Anterior</button> : null}
                {nextData.length > 0 ? <button onClick={() => getNextData()}>Siguiente</button> : null}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}