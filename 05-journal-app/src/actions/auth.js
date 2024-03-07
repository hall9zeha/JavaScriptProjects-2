// Las acciones no son más que simples funciones que representan nuestros casos de uso

import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { types } from "../types/Types";



export const startLoginWithEmailPassword = (email, password) =>{
    return (dispatch)=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(({user})=>{
                dispatch(login(user.uid,user.displayName))
            })
            .catch(e=>{
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