import { types } from "../types/Types";

const initialState ={
    notes:[],
    active:null
}

export const notesReducer = (state=initialState, action)=>{
    switch (action.type) {
        case types.notesActive:
            return{
                //Recuerda que se hace esto "...your_object" para no mutar el objeto principal sino crear una nueva copia del mismo
                //Evitando problemas con las referencias directas
                ...state, 
                active:{
                    ...action.payload
                }
            }
        case types.notesLoad:
            return {
                ...state,
                notes:[...action.payload]
            }
    
        default:
            return state;
    }
}