import React from 'react'
import { NotesAppBar } from './NotesAppBar'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'

export const NoteScreen = () => {
    //Renombramos el objeto desestructurado 'active' a 'note' active:note
    const {active:note} = useSelector(state =>state.notes)
    const [formValues, handleInputChange] = useForm(note);
    const {body, title} = formValues
  return (
    <div className='notes__main-content'>
        <NotesAppBar/>
        <div className='notes__content'>
            <input 
                type='text'
                placeholder='Some awesome'
                className='notes__title-input'
                value={title}
                onChange={handleInputChange}
                />
            <textarea
                placeholder='What happened today'
                className='notes__textarea'
                value={body}
                onChange={handleInputChange}
            ></textarea>
            <div className='notes__image'>
                <img
                src='https://cdn.pixabay.com/photo/2024/03/03/11/33/balloon-8610226_1280.jpg'
                alt='nature road'
                />
            </div>
        </div>
    </div>
  )
}
