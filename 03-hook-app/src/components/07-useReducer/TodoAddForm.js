import React, { Fragment } from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAddForm = ({handleTodoAdd}) => {


    const [{description}, handleInputChange,resetForm]=useForm({
        description:''
    })


    const handleSubmit = (e)=>{
        e.preventDefault();
        //Si el input box está vacío no hacer nada
        if(description.trim().length <=1){
            return;
        }
        const newTodo = {
            id:new Date().getTime(),
            desc:description,
            done:false
        };

        handleTodoAdd(newTodo);
        resetForm();
    }

  return (
    <>
         <h4>Agregar TODO</h4>
                <hr/>
                <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='description'
                    className='form-control'
                    placeholder='Escribe una tarea'
                    autoComplete='off'
                    value={description}
                    onChange={handleInputChange}
                />
                <button type='submit' className='btn btn-block btn-outline-primary  mt-1 '>Agregar</button>
                </form>
    </>
  )
}
