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
                },
                
            }
        case types.notesListed:
            return{
                ...state,
                notes:[action.payload,...state.notes]
            }
        case types.notesLoad:
            return {
                ...state,
                notes:[...action.payload]
            }
        case types.notesUpdated:
            return {
                ...state,
                notes:state.notes.map(note=>note.id=== action.payload.id ? action.payload.note : note )
            }
        case types.notesDelete:
            return{
                ...state,
                active:null,
                notes:state.notes.filter(note=>note.id !==action.payload)
            }
        case types.notesLogoutCleaning:
            return{
                ...state,
                active:null,
                notes:[]
            }
    
        default:
            return state;
    }
}