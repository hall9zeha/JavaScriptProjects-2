import React from 'react'
import {Calendar,momentLocalizer} from 'react-big-calendar'
import { Navbar } from '../ui/Navbar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css' //Estilos para big calendar

const localizer = momentLocalizer(moment)
const events =[{
    title:'Cumpleaños de Martha',
    start:moment().toDate(),//como hacer new Date()
    end:moment().add(2,'hours').toDate()//Agregamos dos horas despues de la fecha inicial
}]
export const CalendarScreen = () => {
  return (
    <div className='calendar-screen'>
        <Navbar/>
        <Calendar
            localizer={localizer}
            events={events}
            starAccessor="start"
            endAccessor="end"
        />
    </div>
  )
}
