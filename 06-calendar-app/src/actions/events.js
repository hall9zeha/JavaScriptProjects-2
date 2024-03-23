import { fetchWithToken } from "../helpers/fetch"
import { types } from "../types/types"

//Si se guardó nuestro evento en la base de datos mongo en la nube entonces disparar eventAddNew()
export const eventStartAddNew = (event)=>{
    return async(dispatch, getState)=>{
        //Obtenemos el nombre, uid del usuario que ya está en nuestro store de redux
        const {uid, name} = getState().auth;
        try {
            
            const resp = await fetchWithToken('events',event,'POST');
            const body = await resp.json();
            console.log(body)
            if(body.ok){
                event.id=body.savedEvent.id;
                event.user = {
                    _id:uid,
                    name:name
                }
                
                dispatch(eventAddNew(event))
            }
        
        } catch (error) {
            console.log(error)
        }
    }
}

const eventAddNew =(event)=>({
    type:types.eventAddNew,
    payload:event
})

export const eventSetActive =(event)=>({
    type:types.eventSetActive,
    payload:event
})
export const eventClearActiveEvent = () =>({type:types.eventClearActiveEvent})

export const eventUpdated =(event)=>({
    type:types.eventUpdated,
    payload:event
})
export const eventDeleted = ()=>({
    type:types.eventDeleted
})