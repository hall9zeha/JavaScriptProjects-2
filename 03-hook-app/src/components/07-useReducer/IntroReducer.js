//Creamos un lista de tareas con un objeto
import React from 'react'

export const IntroReducer = () => {

const initialObjectState = [{
    id:123,
    todo:'any task',
    done:false
}]

//Creamos nuestra función reducer que manejará los casos de uso
//Por convención una función Reducer debe tener dos argumentos, un estado y una acción
const todoReducer = (state = initialObjectState, action)=>{
    //debe retornar un nuevo valor u objeto y no modificar el valor u objeto del estado inicial, este debe ser inmutable
    if(action?.type ==='add'){//evalueamos que tipo de acción es y si esta nula o no
        return [...state,action.payLoad]//retornamos una copia del estado anterior y el nuevo objeto agregado
    }
    return state

}

//Creamos un nuevo objeto que será nuestra segunda tarea para agregar a una supuesta lista de tareas
const newTodoObject = {
    id:456,
    todo:'other task',
    done:false
}

//obtenemos el último valor devuelto por nuestro Reducer
let todos = todoReducer();

//Ahora  la acción que recibirá nuestra función Reducer será un objeto
const todoActionAdd={
    type:'add',//debe contener un tipo de acción
    payLoad:newTodoObject//Y el objeto o valor
}

//Enviamos los argumentos a nuestro Reducer
const todo = todoReducer(todos, todoActionAdd);
console.log(todo);


  return (
    <div>
        <h1>IntroReducer</h1>
        <hr/>
        <h3>Abre la consola para ver el resultado</h3>

    </div>
    
  )
}
