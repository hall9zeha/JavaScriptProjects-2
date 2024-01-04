import React from 'react'

export const GifListItem = ({title, url}) => {
  return (
    <div className="card">
        <img src={url} alt={title}/>
        <p>{title}</p>
        </div>
  )
}
