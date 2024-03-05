import React from 'react'

export const Journalentry = () => {
  return (
    <div className='journal__entry pointer'>
      <div
        className='journal__entry-picture'
        style={{
          backgroundSize:'cover',
          backgroundImage:'url(https://w.wallhaven.cc/full/j8/wallhaven-j8delp.jpg)'
        }}  
      ></div>
      <div className='journal__entry-body'>
        <p className='journal__entry-title'>Un nuevo día</p>
        <p className='journal__entry-content'>
          Consectetur eu nisi laborum ea ipsum.
          </p>
      </div>
      <div className='journal__entry-date-box'>
          <span>Monday</span>
          <h4>4</h4>
      </div>
    </div>
  )
}
