import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes';

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const {active:currentNote} = useSelector(state=>state.notes)

  const handleSave=()=>{
    dispatch(startSaveNote(currentNote))
  }

  return (
    <div className='notes__appbar'>
        <span>13 julio 2024</span>
        <div>
            <button className='btn'>Picture</button>
            <button 
              onClick={handleSave}
              className='btn'>Save</button>
        </div>
    </div>
  )
}
