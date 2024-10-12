import React,{useEffect,useState} from "react";
import axios from 'axios'
import '../css/Tables.css'
export default function Tables(props){
    const [data, setData] = useState([])
    const [propertyName, setPropertyName] = useState([])
    const [nextData, setNextData] = useState([])
    const [previusData, setPreviusData] = useState([])
    const [allData, setAllData] = useState([])
    const [clicked, setClicked] = useState(false)
  function getNextData(){
    if (nextData.length > 0) {
      setPreviusData([...previusData, ...data]);
      setData(nextData.slice(0, 4));
      setNextData(nextData.slice(4));
    }

    }
    function getPreviusData(){
      if (previusData.length > 0) {
        setNextData([...data, ...nextData])
        const previousSlice = previusData.slice(-4)
        setData(previousSlice)
        setPreviusData(previusData.slice(0, -4))
      }
    }
    function getOneElement(e){
      e.preventDefault()
      setClicked(true)
      let element = e.target.element.value
      let arrTemp = []
      arrTemp.push(allData.find((elements)=>{
      return  Number(elements.id) === Number(element)
      }))
      if(arrTemp[0]===undefined){
        alert('No existe el elemento')
      }else{
        setData(arrTemp)
      }
    }
    function getClicked(){
      if(clicked){
        setData(allData.slice(0,4))
        setClicked(false)
      }else{
        setClicked(true)
      }
    }
    useEffect(()=>{
        async function getData(){
            await axios.get(`http://localhost:3000/${props.uri}`)
            .then((result)=>{
                setData(result.data.body.slice(0,4))
                setAllData(result.data.body)
                setPropertyName(Object.getOwnPropertyNames(result.data.body[0]))
                if(result.data.body.length>4){
                  setNextData(result.data.body.slice(4))
                }
            })
            .catch((err)=>{
              console.log(err)
            })
        }
        
        getData()
    },[])
    
    return(
      <>
      <div className="center">
        <h1>
          {props.uri}
        </h1>
        <div>
        <button>Agregar</button>
        <form onSubmit={(e)=>getOneElement(e)}>
          <button type="submit">Buscar</button>
          <input type="number" name="element" placeholder="Buscar ID"/>
          </form>        
          {clicked
          ? <button onClick={()=>getClicked()}>Quitar Busqueda</button>
          : null
          }
      </div>
      </div>
      <div className="center">

        <table>
        <thead>
        <tr>

         {propertyName.map((property,index) => (
           <th key={index}>
            {property}
           </th>
           
         ))}
         <th>Accion</th>
        </tr>
        </thead>
        <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {propertyName.map((property, colIndex) => (
              <td key={colIndex}>{item[property]}</td>
            ))}
            <td>
              <button>Accion</button>
              <button>Accion</button>
            </td>
          </tr>
        ))}
        <tr>
        <td>
          {previusData.length>0?<button onClick={()=>getPreviusData()}>Anterior</button>:null}
         {nextData.length>0?<button onClick={()=>getNextData()}>Siguiente</button>:null}
        </td>
        </tr>
      </tbody>
        </table>
      </div>
      </>
    )
}