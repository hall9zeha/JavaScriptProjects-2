import Swal from "sweetalert2";
import { fetchWithToken, fetchWithoutToken } from "../helpers/fetch"
import { types } from "../types/types";
import { eventLogout } from "./events";

export const startLogin = (email, password) =>{
    //Gracias a la librería thunk podemos disponer de un dispatch
    return async(dispatch) =>{
        const resp = await fetchWithoutToken('auth',{email,password},'POST');
        const body = await resp.json();
        
        //Si recibimos un arespuesta correcta de nuestra api 
        /*
            {
                ok:true
                ...
            }
        guardamos el token y la fecha de creación en local storage
        */
       
        if(body.ok){
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch(login({
                uid:body.uid,
                name:body.name
            }))
        }else{
            Swal.fire('Error',body.msg, 'error');
        }
    }
}

export const startRegister = (name,email,password) =>{
    return async(dispatch)=>{
        const resp = await fetchWithoutToken('auth/new',{name,email,password},'POST');
        const body = await resp.json();

        if(body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                uid:body.uid,
                name:body.name
            }))

        }else{
            Swal.fire('Error',body.msg, 'error');
        }

    }
}
export const startChecking =()=> {
    return async(dispatch)=>{

        //No requiere ningún argumento porque por defecto será una petición GET
        const resp = await fetchWithToken('auth/renew');
        const body = await resp.json();

        if(body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                uid:body.uid,
                name:body.name
            }))

        }else{
            
            dispatch(checkingFinish());
        }
    }
}

const checkingFinish = () =>({type:types.authCheckingFinish});
//Ya que usaremos esta acción solo en este lugar no la exportaremos
const login = (user) =>({
    type:types.authLogin,
    payload:user
})

export const startLogout =()=>{
    return (dispatch)=>{
        localStorage.clear();
        dispatch(eventLogout())
        dispatch(logout());
    }
}
const logout =()=>({type:types.authLogout})

