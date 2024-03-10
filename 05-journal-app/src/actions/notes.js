import Swal from "sweetalert2";
import { db } from "../firebase/firebaseConfig";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/Types";
import { fileUpload } from "../helpers/fileUpload";


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

        //Agregamos la nueva nota a nuestro estado redux para que aparezca en nuestra lista del sidebar
        dispatch(addNoteInList(docRef.id,newNote))
    }   
        
}

export const activeNote = (id, note) =>({
    type:types.notesActive,
    payload:{
        id,
        ...note
    }
})
export const addNoteInList=(id,note)=>({
    type:types.notesListed,
    payload:{id,...note}
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
        dispatch(activeNote(note.id,noteToFirebase))
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

export const startUploading = (file)=>{
    return async(dispatch, getState) =>{
        const {active:currentNote} = getState().notes;

        //Mostramos un mensaje de carga
        Swal.fire({
            title:'Uploading',
            text:'Please wait',
            allowOutsideClick:false,
            didOpen:()=>{
                Swal.showLoading();
            }
        })


        const fileUrl = await fileUpload(file)
        
        //Nos daba error porque estabamos mutando directamente el objeto en el estado y eso no está permitido
        //currentNote.url=fileUrl; 
        
        //Por eso hacemos una copia del objeto y solo modificamos la url
        const note = {...currentNote,
                        url:fileUrl }
        

        dispatch(startSaveNote(note))
        //Una vez completada la carga
        Swal.close();
        console.log(fileUrl);
    }
}
export const startDeleteNote = (id) =>{
    return async (dispatch, getState) =>{
        const uid = getState().auth.uid;

        Swal.fire({
            title:'Deleting',
            text:'Please wait',
            allowOutsideClick:false,
            didOpen:()=>{
                Swal.showLoading();
            }
        })
        await db.doc(`${uid}/journal/notes/${id}`).delete();
        Swal.fire('Successfuly delete','Deleted','success');
        dispatch(deleteLocalNote(id));
    }
}
//Borrar la nota del store de redux localmente
export const deleteLocalNote =(id)=>({
    type:types.notesDelete,
    payload:id
})

export const notesLogout=()=>({
    type:types.notesLogoutCleaning
})