// Las acciones no son más que simples funciones que representan nuestros casos de uso

import { types } from "../types/Types";

// La siguiente función retornará un objeto
export const login = (uid, displayName)=>({
    type: types.login,
    payload:{
        uid,
        displayName
    }
})