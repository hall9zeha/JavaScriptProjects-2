import moment from 'moment';
import React, { useEffect, useState } from 'react'

import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import Modal from 'react-modal'
import DateTimePicker from 'react-datetime-picker';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import { eventClearActiveEvent, eventStartAddNew, eventStartUpdate } from '../../actions/events';



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

//Si no se ejecuta un entorno de pruebas entonces configurar normalmente
if(process.env.NODE_ENV !=='test'){
  Modal.setAppElement('#root');
}
const nowDate =  moment().minutes(0).seconds(0).add(1,'hours')
const nowDatePlus = nowDate.clone().add(1,'hours')

const initEvent={
  title:'',
  notes:'',
  start:nowDate.toDate(),
  end:nowDatePlus.toDate()
 
}
export const CalendarModal = () => {

  const dispatch = useDispatch();
  // Obtenemos el estado de redux para nuestro modal form que está en ui
  const {modalOpen} = useSelector(state=> state.ui);
  const {activeEvent} = useSelector(state=> state.calendar);
  
  const [dateStart, setDateStart] = useState(nowDate.toDate())
  const [dateEnd, setDateEnd] = useState(nowDatePlus.toDate())
  const [titleValid, setTitleValid] = useState(true)

  
  const [formValues, setFormValues] = useState(initEvent)
  const {notes,title, start,end} = formValues;
  
  useEffect(()=>{
    //Ya que la primera vez el objeto activeEvent es nulo
    //debemos controlar que solo se envíe si existe
    if(activeEvent){
      setFormValues(activeEvent)
    }else{
      setFormValues(initEvent)
    }
  },[activeEvent,setFormValues])

  const handleInputchange = ({target})=>{
    setFormValues({
      ...formValues,
      [target.name]:target.value
    })
  }

  const closeModal = ()=>{
       dispatch(uiCloseModal());
       dispatch(eventClearActiveEvent());
       setFormValues(initEvent)

    }
    //Al escoger una fecha en el datepicker la capturamos con esta función
    const handleStartDateChange = (e)=>{
      setDateStart(e)
      setFormValues({
        ...formValues,
        start:e
      })
    }
    const handleEndDateChange = (e)=>{
      setDateEnd(e)
      setFormValues({
        ...formValues,
        end:e
      })
    }
    const handleSubmitForm = (e)=>{
      e.preventDefault()
     
      const momentStart = moment(start)
      const momentEnd = moment(end)
     
      //Validamos que la fecha inicial no sea igual o mayor que la fecha final
      if(momentStart.isSameOrAfter(momentEnd)){
        Swal.fire('Error','La fecha fin debe ser mayor que la fecha de inicio')  
        return;
      }
      if(title.trim().length <2){
        return setTitleValid(false)
      }
      
      if(activeEvent){
        dispatch(eventStartUpdate(formValues))
      }else{
        
        dispatch(eventStartAddNew(formValues))
      }
      setTitleValid(true)
      closeModal()
    }

  return (
    <Modal
        testId='modal'
        isOpen={modalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        className='modal'
        overlayClassName='modal-fondo'
        closeTimeoutMS={200}
        ariaHideApp={!process.env.NODE_ENV === 'test'}
        >
        <h1> {(activeEvent) ? 'Editar evento' : 'Nuevo evento'} </h1>
        <hr />
        <form className="container"
              onSubmit={handleSubmitForm}
        >

            <div className="form-group mb-2">
                <label>Fecha y hora inicio</label>
                <DateTimePicker
                    testId="picker1"
                    onChange={handleStartDateChange}
                    value={activeEvent ? activeEvent.start : dateStart}
                    className='form-control'/>
            </div>

            <div className="form-group mb-2">
                <label>Fecha y hora fin</label>
                <DateTimePicker
                    testId="picker2"
                    onChange={handleEndDateChange}
                    value={activeEvent ? activeEvent.end: dateEnd}
                    //La fecha inicial no debe ser mayor que dateEnd, lo validamos con minDate 
                    minDate={dateStart}
                    className='form-control'/>
            </div>

            <hr />
            <div className="form-group mb-2">
                <label>Titulo y notas</label>
                <input 
                    type="text" 
                    // Si nuestro campo de texto está vacío nos mostrará una alerta con la clase is-invalid
                    className={`form-control ${!titleValid && 'is-invalid'}`}
                    placeholder="Título del evento"
                    name="title"
                    value={title}
                    onChange={handleInputchange}
                    autoComplete="off"
                />
                <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
            </div>

            <div className="form-group mb-2">
                <textarea 
                    type="text" 
                    className="form-control"
                    placeholder="Notas"
                    rows="5"
                    name="notes"
                    value={notes}
                    onChange={handleInputchange}
                ></textarea>
                <small id="emailHelp" className="form-text text-muted">Información adicional</small>
            </div>

            <button
                type="submit"
                className="btn btn-outline-primary btn-block"
            >
                <i className="far fa-save"></i>
                <span> Guardar</span>
            </button>

        </form>
    </Modal>
  )
}
