// Las acciones no son más que simples funciones que representan nuestros casos de uso

import Swal from "sweetalert2";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { types } from "../types/Types";
import { uiFinishLoading, uiStartLoading } from "./ui";
import { notesLogout } from "./notes";



export const startLoginWithEmailPassword = (email, password) =>{
    return (dispatch)=>{
        dispatch(uiStartLoading())
        return firebase.auth().signInWithEmailAndPassword(email,password)
            .then(({user})=>{
                dispatch(login(user.uid,user.displayName));
                dispatch(uiFinishLoading())
            })
            .catch(e=>{
                dispatch(uiFinishLoading())
                Swal.fire('Error',e.message,'error');
                console.log(e)
            })
        
    }
}

export const startLoginWithGoogle = ()=>{
    return (dispatch)=>{
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user})=>{
                dispatch(login(user.uid,user.displayName))
            })
    }
}

export const startRegisterWithEmailPasswordName = (email, password,name)=>{
    return(dispatch)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(async({user}) =>{
                await user.updateProfile({displayName:name});
                dispatch(login(user.uid,user.displayName));
            })
            .catch(e=>{
                Swal.fire('Error',e.message,'error');
                console.log(e)
                
            })
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

// Logout

export const startLogout = ()=>{
    return async (dispatch)=>{
        await firebase.auth().signOut();
        dispatch(logout())
        dispatch(notesLogout());
    }
}

export const logout=()=>({
    type:types.logout
})