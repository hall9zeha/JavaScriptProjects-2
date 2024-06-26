import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {
    
    const {state:counter, increment}= useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Counter:<Small value={counter}/></h1>
            <hr/>
                <button
                    className='btn btn-primary'
                    onClick={()=>increment(1)}
                    >
                    +1
                </button>
                <button 
                    className='btn btn-outline-primary ml-3'
                    onClick={()=>setShow(!show)}
                >
                {show ? "Ocultar" : "Mostrar"}    
                </button>

        </div>
    )
}
