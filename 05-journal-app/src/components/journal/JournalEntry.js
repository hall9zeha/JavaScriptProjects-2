import moment from 'moment'
import React from 'react'

export const JournalEntry = ({id,date,title,body,url}) => {

  const customDate = moment(date);
  
  return (
    <div className='journal__entry pointer'>
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
