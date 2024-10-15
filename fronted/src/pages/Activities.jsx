import {React,useState,useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import Cookies from 'js-cookie'

export default function Activities() {
    const activities = true
    const color = 'blue'
    const token = Cookies.get('jwt')
    const [active, setActive] = useState(null)
    useEffect(() => {
        async function getData(token) {
            await axios.get(`http://localhost:3000/verify/${token}`)
                .then((result) => {
                    setActive(result.data.user.rol)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        getData(token)
    }, [token])

    return (
        <div>
            <Header active={active} activities={activities} color={color}/>


            <Footer />
        </div>
    )
}
