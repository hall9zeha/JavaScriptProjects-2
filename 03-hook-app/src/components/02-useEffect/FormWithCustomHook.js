
import React from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css'


export const FormWithCustomHook = () => {

    const [formValues, handleOnChange] = useForm({
        name:'',
        email:'',
        password:''
    })
    const {name, email,password} = formValues;

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(formValues)
    }

  return (
    <form onSubmit={handleSubmit}>
        <h1>useEffectWithCustomHook</h1>
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
        <div className="form-group">
        <input
                type="password"
                name="password"
                className="form-control"
                placeholder="*******"
              
                value={password}
                onChange={handleOnChange}
                />
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
    </form>
  )
}
