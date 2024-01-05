import React from 'react'

export const GifListItem = ({title, url}) => {
  return (
    <div className="card animate__animated animate__bounceInLeft animate__delay-700s" >
        <img src={url} alt={title}/>
        <p>{title}</p>
        </div>
  )
}
