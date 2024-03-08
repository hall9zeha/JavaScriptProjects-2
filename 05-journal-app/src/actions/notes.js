import Swal from "sweetalert2";
import { db } from "../firebase/firebaseConfig";
import { loadNotes } from "../helpers/loadNotes";
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
            date: new Date().getTime(),
            url:''
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

export const startLoadingNotes=(uid) =>{
    return async(dispatch)=>{
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const setNotes = (notes) =>({
    type:types.notesLoad,
    payload:notes
})

export const startSaveNote = (note) =>{
    //dispatch y getState proporcionados por el middleware de thunk 
    return async(dispatch,getState)=>{
        //getState podemos acceder a los objetos dentro de nuestros estados en redux, nos ahorra
        //tener que enviar y recibir argumentos entre funciones
        const {uid} = getState().auth
        const noteToFirebase = {...note}
        delete  noteToFirebase.id; //No necesitamos ni debemos actualizar el id de la nota
        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirebase)

        //La actualización de los datos de la nota en la vista se hacen después de que se haya actualizado
        //en la base de datos pero no haciendo una nueva petición(queda a discreción)
        dispatch(refreshNoteById(note.id,noteToFirebase))
        
        //Mensaje nota gaurdada
        Swal.fire("Successfull saved",note.title,'success');

    }
}

export const refreshNoteById = (id, note)=>({
    type:types.notesUpdated,
    payload:{
        id,
        note:{id,...note}
    }
})