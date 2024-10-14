import Calendar from "../components/Calendar";
import React, {useEffect,useState} from "react";
import axios from "axios";

export default function CalendarPage(){
    const [events, setEvents] = useState([]);
    useEffect(()=>{
        async function getEvents() {
            await axios.get('http://localhost:3000/apms')
            .then((result) => {
                console.log(result.data.body)
                setEvents(result.data.body)
            }).catch((err) => {
                console.log(err)
            });
        }
        getEvents()
    },[])
    return(
        <Calendar
        />
    )
}