import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes';
import moment from 'moment';

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const {active:currentNote} = useSelector(state=>state.notes)
  const noteDate = moment(currentNote.date);

  const handleSave=()=>{
    dispatch(startSaveNote(currentNote))
  }

  const handlePictureUpload = ()=>{
    document.querySelector('#fileSelector').click()
  }
  const handleFileChange = (e)=>{
    
    const file = e.target.files[0]
    if(file){
      dispatch(startUploading(file))
    }
  }
  
  
  return (
    <div className='notes__appbar'>
        <span>{noteDate.format('dddd D YYYY')}</span>
        <input
          id='fileSelector'
          type='file'
          name='file'
          style={{display:'none'}}
          onChange={handleFileChange}
        />
        <div>
            <button 
              onClick={handlePictureUpload}
              className='btn'>Picture</button>
            <button 
              onClick={handleSave}
              className='btn'>Save</button>
        </div>
    </div>
  )
}
