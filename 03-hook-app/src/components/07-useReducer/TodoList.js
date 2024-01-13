import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, handleDoneTask, handleDelete}) => {
  return (
    
             <ul className='list-group list-group-flush'>
                {
                    todos.map((todo, i)=>(
                      <TodoItem
                        key={todo.id}
                        todo={todo} 
                        index={i} 
                        handleDoneTask={handleDoneTask} 
                        handleDelete={handleDelete}/>
                    ))
                }
                </ul>
   
  )
}
