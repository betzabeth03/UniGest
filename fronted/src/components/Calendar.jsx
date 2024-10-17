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
    const [filter, setFilter] = useState([]);
    const [materias, setMaterias] = useState([]);
    const [openFiltrer, setOpenFiltrer] = useState('notFiltrerForm')


    useEffect(() => {

        async function getEvents() {
            await axios.get('http://localhost:3000/apms')
                .then(async (result) => {
                    const materiasRes = await axios.get('http://localhost:3000/materias');
                    setMaterias(materiasRes.data.body);
                    let arrTemp = []
                    let arrSubjectsFilter = []

                    if (filter.length !== 0) {
                        arrSubjectsFilter = result.data.body.filter(evento =>
                            filter.includes(evento.materia)
                        );
                    } else {
                        arrSubjectsFilter = result.data.body;
                    }
                    arrSubjectsFilter.forEach((item) => {
                        const date = new Date(item.date)
                        const dateDay = date.getDay()
                        let dateEvent = undefined
                        if (dateDay === item.diaClase) {
                            const nuevaFecha = new Date(item.date)
                             nuevaFecha.setDate(date.getDate() - 1)
                             const nuevaFechaISO = nuevaFecha.toISOString().slice(0, 10).replace('T', '')
                              dateEvent = nuevaFechaISO;
                        } else {
                            let diferencia = item.diaClase - dateDay
                            if (diferencia <= 1) {
                                diferencia = diferencia + 6;
                            }

                            const nuevaFecha = new Date(item.date);
                            nuevaFecha.setDate(date.getDate() + diferencia);
                            const nuevaFechaISO = nuevaFecha.toISOString().slice(0, 10).replace('T', '')
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
    }, [filter])

    function openFiltrerForm() {
        if (openFiltrer === '') {
            setOpenFiltrer('notFiltrerForm')
        } else {
            setOpenFiltrer('')
        }
    }

    const handleEventClick = (arg) => {
        setEventClicked(arg.event)
        SetIsBlur(true)
        setNoDisplay(false)
    }
    const handleDivClick = () => {
        SetIsBlur(false)
        setNoDisplay(true)
    }
    function handleFilterChange(e) {
        const { value, checked } = e.target
        setFilter(prevState => {
            if (checked) {
                return [...prevState, value]
            } else {
                return prevState.filter(materia => materia !== value)
            }
        });
    }

    return (
        <section className='viewAllCalendar'>
            <div className='filtrerWidth'>
                <input type='button' className='buttonFiltrer' onClick={openFiltrerForm} value={'Filtrar'}/>

            </div>
            <section className='calendarSection'>
                <div className={isBlur ? 'Blur calendarView ' : 'calendarView    '}>
                    <FullCalendar
                        aspectRatio={2.1}
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
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
            <div className={`filtrerForm ${openFiltrer}`}>
                <div className='containFiltrer'>
                    <form className='listChecked'>
                        <div className='listFiltrer'>
                            <h3>Filtrar por materias</h3>
                            {materias.map((materia) => (
                                <label key={materia.id} className='inputCheckbox'>
                                    <input
                                        type="checkbox"
                                        value={materia.nombre}
                                        onChange={handleFilterChange}
                                        checked={filter.includes(materia.nombre)}
                                        className='inputChecked'
                                    />
                                    {materia.nombre}
                                </label>

                            ))}
                        </div>
                        <input type='button' className='aceptButtonFiltrer' onClick={openFiltrerForm} value={'Aceptar'} />
                    </form>
                </div>
            </div>

        </section>
    )
}