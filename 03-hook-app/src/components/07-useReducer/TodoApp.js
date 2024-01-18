import React, { useEffect, useReducer } from 'react'

import './reducerStyles.css'
import { TodoAddForm } from './TodoAddForm'
import { TodoList } from './TodoList'
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
    


    //useEffect para lanzar la orden de grabar en Local storage
    useEffect(()=>{

        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos]);//cuando cambie la lista de tareas se guardará una nueva versión en LocalStorage

    const handleTodoAdd = (newTodo)=>{
        dispatch({
            type:'add',
            payload:newTodo
            }
        )
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
    const handleDoneTask =(todoId)=>{
        const actionDone={
            type:'done',
            payload:todoId
        }
        dispatch(actionDone);
    }

  return (
    <div>
        <h1>TodoApp ({todos.length})</h1>
        <hr/>
        <div className='row'>
            <div className='col-7'>
                <TodoList 
                    todos={todos}
                    handleDoneTask={handleDoneTask}
                    handleDelete={handleDelete}/>
                
            </div>
            <div className='col-5'>
               <TodoAddForm handleTodoAdd={handleTodoAdd} />
            </div>
        </div>
        
    </div>
  )
}
