import Swal from "sweetalert2";
import { fetchWithToken } from "../helpers/fetch"
import { prepareEvents } from "../helpers/prepareEvents";
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

export const eventStartUpdate =(event) =>{
    return async(dispatch)=>{
        try {
            const resp = await fetchWithToken(`events/${event.id}`,event,'PUT');
            const body = await resp.json();

            if(body.ok){
                dispatch(eventUpdated(event));
            }else{
                Swal.fire('Error',body.msg,'error');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const eventUpdated =(event)=>({
    type:types.eventUpdated,
    payload:event
})

export const eventStartDelete =()=>{
    return async(dispatch,getState)=>{
        const {id} = getState().calendar.activeEvent;
        
        try {
            const resp = await fetchWithToken(`events/${id}`,{},'DELETE');
            const body = await resp.json();

            if(body.ok){
                dispatch(eventDeleted());
              
            }else{
                Swal.fire('Error',body.msg,'error');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const eventDeleted = ()=>({
    type:types.eventDeleted
})

export const eventStartLoading = ()=>{

    return async(dispatch,getState)=>{
        const {uid} = getState().auth;
        try {
            const resp = await fetchWithToken('events');
            const body = await resp.json();
            const events = prepareEvents(uid,body.events);
            dispatch(eventLoaded(events));

        } catch (error) {
            
        }
    }
}

const eventLoaded=(events)=>({
    type:types.eventLoaded,
    payload:events
})

export const eventLogout=()=>({
    type:types.eventLogout
})