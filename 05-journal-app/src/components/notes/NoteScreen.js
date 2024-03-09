import React, { useEffect, useRef } from 'react'
import { NotesAppBar } from './NotesAppBar'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { activeNote } from '../../actions/notes'

export const NoteScreen = () => {

    const dispatch = useDispatch();
    //Renombramos el objeto desestructurado 'active' a 'note' active:note
    const {active:note} = useSelector(state =>state.notes)
    const [formValues, handleInputChange, reset] = useForm(note);
    const {body, title} = formValues

    /*
    Para que los campos del formulario de nuestra nota cambien al seleccionar otra
    debemos resetear el formulario con los nuevos valores, para ello usaremos lo siguiente
    
    useRef almacena una variable mutable y no va aredibujar el componente si esta cambia
    */
    const activeNoteId =  useRef(note.id);
    useEffect(()=>{
        //Si el id de la nota seleccionada es diference a nuestro id inicial guardado
        //entonces reetear el formulario y establecer activeNoteId con el nuevo valor
        if(note.id !== activeNoteId.current){
            reset(note);
            activeNoteId.current = note.id
        } 
    },[note,reset])

    //Otro useEffect para actualizar el estado de la nota activa cuando escribimos algo dentro de sus campos
    useEffect(()=>{
        dispatch(activeNote(formValues.id,{...formValues}))
    },[formValues,dispatch])

  return (
    <div className='notes__main-content'>
        <NotesAppBar/>
        <div className='notes__content'>
            <input 
                type='text'
                placeholder='Some awesome'
                className='notes__title-input'
                name='title'
                value={title}
                onChange={handleInputChange}
                />
            <textarea
                placeholder='What happened today'
                className='notes__textarea'
                name='body'
                value={body}
                onChange={handleInputChange} 
            
            ></textarea>
            {
                note.url &&
                    <div className='notes__image'>
                        <img
                        src={note.url}
                        alt='nature road'
                        />
                    </div>
            }
           
        </div>
    </div>
  )
}
