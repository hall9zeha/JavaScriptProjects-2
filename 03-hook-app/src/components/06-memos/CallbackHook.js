import React, { useCallback, useState } from 'react'
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(1);
    // const increment = ()=>{
    //     setCounter(counter +1 );
    // }

    //Para evitar que se llame al componente ShowIncrement cada vez que cambie nuestro contador usamos
    //useCallback para devolver una referencia en memoria de nuestra función increment ejecutada

    const increment = useCallback((num)=>{
        setCounter(c=>c + num);
    },[setCounter])

    return (
        <div>
            <h1>UseCallBack Hook: {counter}</h1>
            <hr/>
            <ShowIncrement increment={increment}/>
        </div>
    )
}
