import { db } from "../firebase/firebaseConfig";
import { types } from "../types/Types";

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
        // Un vez creada la nota en firebase solo necesitaremos su id y enviaremos nuevamente el objeto newNote
        // que está vacío hacia nuestra vista, para actualizar los cambios que hagamos y guardarlos
        dispatch(activeNote(docRef.id,newNote))
    }   
        
}

export const activeNote = (id, note) =>({
    type:types.notesActive,
    payload:{
        id,
        ...note
    }
})

export const setNotes = (notes) =>({
    type:types.notesLoad,
    payload:notes
})