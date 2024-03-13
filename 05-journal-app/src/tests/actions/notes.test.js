
import configureStore from 'redux-mock-store'


 //Nos da un error al importarlo: middleware is not a function
 //al parecer por la nueva versión 3.*  
 //la manera que uso en este test es la siguiente: const thunk = require('redux-thunk').thunk;
//import  thunk from 'redux-thunk'

//La versión de firebase 10.7.* a superiores nos da el error: ReferenceError: TextDecoder is not defined
//Así que para fines prácticos en este proyecto la versión usada es la 10.6

//!!!!MUY IMPORTANTE para realizar pruebas con firebase se necesita cambiar el entorno de pruebas a 'node' y no con 'jsdom'
//sino nos dará errores como (UNEXPECTED state) revisar la configuración de los scripts en package.json para ver
//como está configurado nuestro script de test
//Forma de cambiar el entorno de tests en scripts:
//"test": "react-scripts test --env=node", por defecto es jsdom.



import { startLoadingNotes, startNewNote, startSaveNote, startUploading } from '../../actions/notes'
import { types } from '../../types/Types';
import { db } from '../../firebase/firebaseConfig';
import { fileUpload } from '../../helpers/fileUpload';


const thunk = require('redux-thunk').thunk;
//***************************/
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
    auth:{
        uid:'TestingUID',
        name:'Unknown'
    },
    notes:{
        active:{
            id:'qV3V7Z6Z6cEtWxOiwYOz',
            title:'modificado',
            body:'body modificado',
            
        }
    }
}
jest.mock('../../helpers/fileUpload',()=>({
    fileUpload:jest.fn(()=>{
        return  Promise.resolve('https://www.mockedweb.com/imageMocked.jpg')
    })
}))

//Gracias a redux mock store podemos simular nuestro store de redux y middlewares
let store = mockStore(initState)
 
describe('Tests in notes actions', () => { 

    // beforeAll(() => {
        
    //     global.setImmediate = (callback) => {
    //         setTimeout(callback, 0);
    //     };
        
    // });
    beforeEach(()=>{
       store=mockStore(initState)
    })

    test('should create new note with startNewNote', async() => { 
       
        //  Al usar await se producía un error de ReferenceError: setImmediate is not defined
        //  Pero el registro en firebase se creaba correctamente 
        //  la configuración de beforeAll corrigió este error, pero al cambiar el entorno de pruebas a 'node'
        //  Ya no es necesaria la configuración dentro de beforeAll 
           await store.dispatch(startNewNote());
           const actions = store.getActions();
           expect(actions[0]).toEqual({
            type:types.notesActive  ,
            payload:{
                id:expect.any(String),
                title: '',
                body: '',
                date:expect.any(Number),
                url: ''
            }
           })

           expect(actions[1]).toEqual({
            type:types.notesListed  ,
            payload:{
                id:expect.any(String),
                title: '',
                body: '',
                date:expect.any(Number),
                url: ''
            }
           })

        //    Eliminamos el registro  en la base de datos para pruebas, despues de hacer las comprobaciones
           const docId = actions[0].payload.id
           await db.doc(`TestingUID/journal/notes/${docId}`).delete();
                
     })
     test('should fetch all test notes', async() => {
        
        
        
        // TestingUID es el id de nuestra colección en firebase TestingUID/journal/notes/*

        await store.dispatch(startLoadingNotes('TestingUID'));
        const actions = store.getActions()
        console.log(actions)
        expect(actions[0]).toEqual({
            type:types.notesLoad,
            payload:expect.any(Array)
        })
      })
      test('should update a note', async() => { 
        const note ={
                id:'qV3V7Z6Z6cEtWxOiwYOz',
                title:'modificado',
                body:'body modificado'
            }
                     
            await store.dispatch(startSaveNote(note))
            const actions = store.getActions()
            expect(actions[0].type).toBe(types.notesUpdated)
            
            const docRef = await db.doc(`/TestingUID/journal/notes/${note.id}`).get()
            
            expect(docRef.data().title).toBe(note.title)
            console.log(actions)
            
           
       })
      
       //TODO Requiere los entorno jsdom como node por igual, buscar la forma de que funcione
//        test('should update url with startUploading', async() => { 
//             const mockFile=new File([],'image.jpg');
//             await store.dispatch(startUploading(mockFile)) 
//         })
 })