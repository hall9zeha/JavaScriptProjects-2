// Las acciones no son más que simples funciones que representan nuestros casos de uso

import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { types } from "../types/Types";

export const startLoginAsyncExample = (email, password) =>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(login(5555555,'Barry'))
        }, 2500);
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