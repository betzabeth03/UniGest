import React, {useEffect,useState} from "react";
import Cookies from 'js-cookie'
import Landing from "../components/Landing";
import LandingDirector from '../components/LandingDirector'
import axios from "axios";
export default function LandinPage(){
    const token = Cookies.get('jwt')
    const [active, setActive] = useState(null)
    useEffect(()=>{
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
    })
    return(
        <>
            {active==="Director"?
                <LandingDirector/>:
                <Landing/>
            }
        </>
    )
}