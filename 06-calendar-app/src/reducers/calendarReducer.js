import moment from "moment";
import { types } from "../types/types";

const initialState ={
    events:[{
        title:'Cumpleaños de Martha',
        start:moment().toDate(),//como hacer new Date()
        end:moment().add(2,'hours').toDate(),//Agregamos dos horas despues de la fecha inicial
        notes:'Comprar el pastel',
        user:{
            _id:123,
            name:'Barry'
        }
    }],
    activeEvent:null
}

export const calendarReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.eventSetActive:
            return{
                ...state,
                activeEvent:action.payload
            }
        case types.eventAddNew:
            return{
                ...state,
                event:[...state.events,action.payload]
            }
    
        default:
            return state;
    }
}