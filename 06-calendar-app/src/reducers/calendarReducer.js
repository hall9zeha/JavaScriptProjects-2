
import { types } from "../types/types";
//Modelo de referencia de un evento
// {
//     id:'eehhnjshh2h3h23jn4443434jk',
//     title:'Cumpleaños de Martha',
//     start:moment().toDate(),//como hacer new Date()
//     end:moment().add(2,'hours').toDate(),//Agregamos dos horas despues de la fecha inicial
//     notes:'Comprar el pastel',
//     user:{
//         _id:123,
//         name:'Barry'
//     }
// }

const initialState ={
    events:[],
    activeEvent:null
}

export const calendarReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.eventSetActive:
            return{
                ...state,
                activeEvent:action.payload
            }
        case types.eventLoaded:
            return{
                ...state,
                events:[...action.payload]
            }
        case types.eventAddNew:
            return{
                ...state,
                events:[...state.events,action.payload]
            }
        case types.eventClearActiveEvent:
            return{
                ...state,
                activeEvent:null
            }
        case types.eventUpdated:
            return{
                ...state,
                events:state.events.map(
                    e=>(e.id=== action.payload.id)? action.payload : e
                )
            }
        case types.eventDeleted:
            return{
                ...state,
                events:state.events.filter(
                    e=>(e.id !== state.activeEvent.id)
                ),
                activeEvent:null
            }
        case types.eventLogout:
            return{ ...initialState}
        default:
            return state;
    }
}