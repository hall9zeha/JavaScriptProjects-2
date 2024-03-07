import { db } from "../firebase/firebaseConfig";

export const startNewNote = () =>{
    // getState es el segundo parámetro proveido por redux-thunk que nos permite despachar las acciones
    // y funciona muy parecido a useSelector al acceder a los objetos de nuestros estados en redux, para 
    // extraer en este caso los datos de usuario en sesión.
    return async (dispatch,getState)=>{
        const {uid} = getState().auth;

        const newNote = {
            title:'',
            body:'',
            date: new Date().getTime()
        }
        const docRef = await db.collection(`${uid}/journal/notes`).add(newNote)
           
    }   
        
}