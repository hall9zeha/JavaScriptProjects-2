// Las acciones no son más que simples funciones que representan nuestros casos de uso

import { types } from "../types/Types";

export const startLoginAsyncExample = (email, password) =>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(login(5555555,'Barry'))
        }, 2500);
    }
}

// La siguiente función retornará un objeto
export const login = (uid, displayName)=>({
    type: types.login,
    payload:{
        uid,
        displayName
    }
})