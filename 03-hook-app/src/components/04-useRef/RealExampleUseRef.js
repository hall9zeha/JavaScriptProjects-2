import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-Examples/MultipleCustomHooks'

export default function RealExampleUseRef() {

    const [show, setShow] = useState(false)

  return (
    <div>
        <h1>RealExampleUseRef</h1>
        <hr/>
        { show && <MultipleCustomHooks data-testid='multiple-custom-hooks'/>}
        <button className='btn btn-primary mt-3'
                onClick={()=>setShow(!show)}
        >
            { show ? "Ocultar" : "Mostrar" }
        </button>
    </div>
  )
}
