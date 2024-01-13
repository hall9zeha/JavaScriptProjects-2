import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm'
import './reducerStyles.css'
import { todoReducer } from './todoReducer'

const init=()=>{
    // return [{
    //     id:new Date().getTime(),
    //     desc:'learning Android multiplatform',
    //     done:false
    // }]
    //Usaremos lo que almacenemos en Local storage
    return JSON.parse(localStorage.getItem('todos')) || []; //si existen retornar, sino un arreglo vacío
}
export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [],init)
    console.log(todos)

    const [{description}, handleInputChange,resetForm]=useForm({
        description:''
    })

    //useEffect para lanzar la orden de grabar en Local storage
    useEffect(()=>{

        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos]);//cuando cambie la lista de tareas se guardará una nueva versión en LocalStorage

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

        const actionAdd ={
            type:'add',
            payload:newTodo
        };
        dispatch(actionAdd);
        resetForm();
    }
    //Para eliminar un registro
    const handleDelete = (todoId)=>{
        console.log(todoId);
        const actionDelete = {
            type:'delete',
            payload:todoId
        }
        dispatch(actionDelete);

    }

  return (
    <div>
        <h1>TodoApp ({todos.length})</h1>
        <hr/>
        <div className='row'>
            <div className='col-7'>
                <ul className='list-group list-group-flush'>
                {
                    todos.map((todo, i)=>(
                        <li key={todo.id}
                            className='list-group-item'
                        >
                            <p className='text-center '>{i+1 }.{todo.desc}</p>
                            <button 
                                onClick={()=>{handleDelete(todo.id)}}
                                className='btn btn-danger'>Borrar</button> 
                        </li>
                    ))
                }
                </ul>
                
            </div>
            <div className='col-5'>
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
            </div>
        </div>
        
    </div>
  )
}
