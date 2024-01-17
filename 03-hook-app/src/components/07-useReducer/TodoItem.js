import React from 'react'

export const TodoItem = ({todo,index, handleDoneTask, handleDelete}) => {
  return (
    <li key={todo.id}
        className='list-group-item'
        >
        <p className={`${todo.done && 'complete'}`}
            onClick={()=>{handleDoneTask(todo.id)}}
        >{index+1 }.{todo.desc}</p>
        <button 
            data-testid='btn-delete'
            onClick={()=>{handleDelete(todo.id)}}
            className='btn btn-danger'>Borrar</button> 
    </li>
  )
}
