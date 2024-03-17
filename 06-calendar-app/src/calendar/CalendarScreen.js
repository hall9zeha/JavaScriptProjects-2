import React, { useState } from 'react'
import {Calendar,momentLocalizer} from 'react-big-calendar'
import { Navbar } from '../ui/Navbar'
import moment from 'moment'
import { useDispatch } from 'react-redux'

import 'moment/locale/es'//Cambia los nombres de mes,día a español


import 'react-big-calendar/lib/css/react-big-calendar.css' //Estilos para big calendar
import { messages } from '../helpers/calendar-translate-es'
import { CalendarEvent } from './CalendarEvent'
import { CalendarModal } from './CalendarModal'
import { uiOpenModal } from '../actions/ui'
import { eventSetActive } from '../actions/events'



moment.locale('es')//Cambia los nombres de mes,día a español

const localizer = momentLocalizer(moment)
const events =[{
    title:'Cumpleaños de Martha',
    start:moment().toDate(),//como hacer new Date()
    end:moment().add(2,'hours').toDate(),//Agregamos dos horas despues de la fecha inicial
    notes:'Comprar el pastel',
    user:{
        _id:123,
        name:'Barry'
    }
}]
export const CalendarScreen = () => {

    const dispatch = useDispatch()

    //Como valor inicial de useState leemos local storage para ver si hay algo, sino ponemos por defecto month
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')

    const onDoubleClick = (e)=>{
          dispatch(uiOpenModal())
    }
    const onSelectEvent = (e)=>{
        
        dispatch(eventSetActive(e))
    }
    const onViewChange = (e)=>{
        setLastView(e)
        //Guardamos en local storage la última vista(day,week,month) del calendario para que al recargar el mismo
        //nos muestre esa pantalla
        localStorage.setItem('lastView',e)
    }
    const eventStyleGetter = (event,start,end,isSelected)=>{
        const style = {
            backgroundColor:'#367cf7',
            borderRadius:'0px',
            opacity:0.8,
            display:'block',
            color:'white'
        }
        return {
            style
        }
    }
  return (
    <div className='calendar-screen'>
        <Navbar/>
        <Calendar
            localizer={localizer}
            events={events}
            starAccessor="start"
            endAccessor="end"
            messages={messages} //Remover si se quiere el lenguaje por defecto Inglés o usar sus propias traducciones
            eventPropGetter={eventStyleGetter}
            //Usamos components usar nuestro componente personalizado y mostrar la información 
            //de cada evento en el calendario con nuestro propio diseño
            components={{
                event:CalendarEvent
            }}
            onDoubleClickEvent={onDoubleClick}
            onSelectEvent={onSelectEvent}
            onView={onViewChange}
            view={lastView}
        />
        <CalendarModal/>
    </div>
  )
}
