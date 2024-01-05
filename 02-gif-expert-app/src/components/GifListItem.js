import React from 'react'
import PropTypes from 'prop-types'

export const GifListItem = ({title, url}) => {
  return (
    <div  data-testid="div" className="card animate__animated animate__bounceInLeft animate__delay-700s" >
        <img src={url} alt={title}/>
        <p>{title}</p>
        </div>
  )
}

GifListItem.propTypes={
  title:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired
}