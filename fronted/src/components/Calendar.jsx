import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import React, { useEffect, useState } from "react";
import axios from "axios";
import '../css/Calendar.css'
export default function Calendar() {
    const [events, setEvents] = useState([]);
    const [isBlur, SetIsBlur] = useState(false)
    const [noDisplay, setNoDisplay] = useState(false)
    const [eventClicked, setEventClicked] = useState(null)
    useEffect(() => {
        async function getEvents() {
            await axios.get('http://localhost:3000/apms')
                .then((result) => {
                    let arrTemp = []
                    result.data.body.forEach((item) => {
                        const date= new Date(item.date)
                        const dateDay = date.getDay()
                        let dateEvent = undefined
                        if(dateDay===item.diaClase){
                            dateEvent = item.date
                        }else{
                            let diferencia = item.diaClase - dateDay

                              if (diferencia < 0) {
                                    diferencia += 6;
                                } 

                            const nuevaFecha = new Date(item.date);
                            nuevaFecha.setDate(date.getDate() + diferencia);
                            const nuevaFechaISO = nuevaFecha.toISOString().slice(0,10).replace('T','')
                            dateEvent = nuevaFechaISO
                        }

                        let eventTemp = {
                            title: item.title,
                            date: dateEvent,
                            extendedProps: {
                                descripcion: item.descripcion,
                                profesor: item.profesor,
                                materia: item.materia,
                                seccion: item.seccion
                            }
                        }
                        arrTemp.push(eventTemp)
                    })
                    setEvents(arrTemp)
                }).catch((err) => {
                    console.log(err)
                });
        }
        getEvents()
    }, [])
    const handleDateClick = (arg) => {
        console.log(arg);
    }
    const handleEventClick = (arg) => {
        console.log(arg.event.extendedProps.profesor);
        setEventClicked(arg.event)
        SetIsBlur(true)
        setNoDisplay(false)
    }
    const handleDivClick = () => {
        SetIsBlur(false)
        setNoDisplay(true)
    }

    return (
        <>
            <section className='calendarSection'>
                <div className={isBlur ? 'Blur calendarView ' : 'calendarView    '}>
                    <FullCalendar
                        aspectRatio={2.1}
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        dateClick={handleDateClick}
                        eventClick={handleEventClick}
                        events={events}
                    />
                </div>

            </section>
            {eventClicked ?
                <div className={noDisplay ? 'hide' : 'show'}>
                    <div className='bg-event'>

                        <div className='cardDescription'>
                            <h2 className='titleDescription'>
                                {eventClicked.title}
                            </h2>
                            <p className='descriptionActivities'>
                                Profesor: {eventClicked.extendedProps.profesor}
                            </p>
                            <p className='descriptionActivities'>
                                Materia: {eventClicked.extendedProps.materia}
                            </p>
                            <p className='descriptionActivities'>
                                Seccion: {eventClicked.extendedProps.seccion}
                            </p>
                            <p className='descriptionActivities'>
                               Descripcion {eventClicked.extendedProps.descripcion}
                            </p>
                        </div>
                        <div className='buttonCancelDescription'>
                            <button onClick={() => handleDivClick()} className='buttonClose'>Cerrar</button>
                        </div>
                    </div>
                </div>
                :
                null
            }
        </>
    )
}