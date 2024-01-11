import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { heavyProcess } from './HeavyProcess';


export const MemoHook = () => {
    
    const {state:counter, increment}= useCounter(100);
    const [show, setShow] = useState(true);

    //Para lanzar el proceso pesado solo cada vez que el contador cambie, cuyo valor será momorizado y devolverá el componente o función en memoria
    //si es que se vuelve a renderizar el componente padre, sin volver a ejecutar innecesariamente nuestro proceso pesado
    const memoHeavyProcess = useMemo(()=>heavyProcess(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3><small>{counter}</small></h3>
            <p>{memoHeavyProcess}</p>
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
