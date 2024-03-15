import React from 'react'
import {Calendar,momentLocalizer} from 'react-big-calendar'
import { Navbar } from '../ui/Navbar'
import moment from 'moment'
import 'moment/locale/es'//Cambia los nombres de mes,día a español


import 'react-big-calendar/lib/css/react-big-calendar.css' //Estilos para big calendar
import { messages } from '../helpers/calendar-translate-es'


moment.locale('es')//Cambia los nombres de mes,día a español

const localizer = momentLocalizer(moment)
const events =[{
    title:'Cumpleaños de Martha',
    start:moment().toDate(),//como hacer new Date()
    end:moment().add(2,'hours').toDate(),//Agregamos dos horas despues de la fecha inicial
    notes:'Comprar el pastel'
}]
export const CalendarScreen = () => {
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
        />
    </div>
  )
}
