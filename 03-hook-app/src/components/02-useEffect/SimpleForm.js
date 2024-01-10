
import React, { useEffect, useState } from 'react'
import './effects.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    })
    const {name, email} = formState;

    useEffect(()=>{
        console.log('useEffect una sola vez');
    },[])//Se ejecutará solo una vez al renderizar el componente

    useEffect(()=>{
        console.log('Escuchando cambios en formulario');
    },[formState]);//Se ejecutará cuando haya cambios en el formulario

    useEffect(()=>{
        console.log('Escuchando cambios en email');
    },[email])//Se ejecutará cuando haya cambios en el input email

    const handleOnChange =({target})=>{
        setFormState({
            ...formState,
            [target.name]:target.value
        })
    }

  return (
    <>
        <h1>useEffect</h1>
        <hr/>
        <div className="form-group">
            <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Escribe tu nombre"
                autoComplete="off"
                value={name}
                onChange={handleOnChange}
                />
          
        </div>
        
        <div className="form-group">
        <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@mail.com"
                autoComplete="off"
                value={email}
                onChange={handleOnChange}
                />
        </div>
    </>
  )
}
