import React, { memo } from 'react'

export const ShowIncrement = memo(({increment}) => {
  return (
    <button 
        className='btn btn-primary'
        onClick={()=>{
            increment(2);//opcional: enviamos el argumento 2 que será recibido por la función useCallback
        }}
    >
        Incrementar
    </button>
  )
})
