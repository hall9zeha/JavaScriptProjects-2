import moment from 'moment'
import React from 'react'
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = (note) => {
  const {id,date,title,body,url} = note;
  const customDate = moment(date);
  const dispatch = useDispatch();

  const handleEntryClick=()=>{
    dispatch(
      activeNote(id,note)
    )
  }

  return (
    <div 
      onClick={handleEntryClick}
      className='journal__entry pointer animate__animated animate__fadeIn animated__faster'>
      {
        // Si la url existe y no es undefined o null mostrar 
        url &&
        <div
          className='journal__entry-picture'
          style={{
            backgroundSize:'cover',
            backgroundImage:`url(${url})`
          }}
        ></div>
      }

      <div className='journal__entry-body'>
        <p className='journal__entry-title'>{title}</p>
        <p className='journal__entry-content'>
          {body}
          </p>
      </div>
      <div className='journal__entry-date-box'>
          <span>{customDate.format('dddd')}</span>
          <h4>{customDate.format('Do')}</h4>
      </div>
    </div>
  )
}
