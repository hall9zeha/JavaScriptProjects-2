import React, { useState } from 'react'
import './counter.css'
export const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30,
        counter4:40
    })
    //para modificar solamente el estado de una propiedad del objeto que contiene nuestro useState
    //desestructuramos solamente lo que vamos a modificar
    const {counter1,counter2} = state

  return (
    <>
    <h1>Counter { counter1}</h1>
    <h1>Counter { counter2}</h1>
    <hr/>
    <button className='btn btn-primary'
        onClick={()=>{//Ahora hacemos una copia del resto de elementos y solo modificamos lo que necesitemos
            setCounter(
                {
                    ...state,//copiamos las demás propiedades del objeto
                    counter1:counter1 +1 //solo incrementamos el contador 1
                }
            )
        }}
    >
        +1
    </button>
    </>
  )
}
