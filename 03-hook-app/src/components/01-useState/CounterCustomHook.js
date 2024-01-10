
import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'

export const CounterCustomHook = () => {

    const {state, increment, decrement} = useCounter();//importamos nuestro custom hook
  return (
    <>
        <h1>Counter Custom Hook: { state }</h1>
        <hr/>
        {/* usamos las funciones en el evento click de los botones */}
        {/* <button onClick={increment} className='btn btn-primary'>+</button>
        <button onClick={decrement} className='btn btn-primary'>-</button> */}

        {/* Si queremos pasar argumentos a través de las funciones, ejemplo con un factor de incremento y decremento de dos */}
        <button onClick={()=>{increment(2)}} className='btn btn-primary'>+</button>
        <button onClick={()=>{decrement(2)}} className='btn btn-primary'>-</button>
    </>
  )
}
