import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
        <NotesAppBar/>
        <div className='notes__content'>
            <input 
                type='text'
                placeholder='Some awesome'
                className='notes__title-input'
                />
            <textarea
                placeholder='What happened today'
                className='notes__textarea'
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
