import configureStore from 'redux-mock-store'
import {setImmediate} from 'timers'

 //Nos da un error al importarlo: middleware is not a function
 //al parecer por la nueva versión 3.*  
 //la manera que uso en este test es la siguiente: const thunk = require('redux-thunk').thunk;
//import  thunk from 'redux-thunk'

//La versión de firebase 10.7.* a superiores nos da el error: ReferenceError: TextDecoder is not defined
//Así que para fines prácticos en este proyecto la versión usada es la 10.6

//TODO usar las nuevas versiones superiores a 10.6.* y tratar de corregir el error ReferenceError: TextDecoder is not defined
import { startNewNote } from '../../actions/notes'
import { types } from '../../types/Types';
import { db } from '../../firebase/firebaseConfig';

const thunk = require('redux-thunk').thunk;
//***************************/
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

//Gracias a redux mock store podemos simular nuestro store de redux y middlewares
const store = mockStore({
    auth:{
        uid:'TestingUID',
        name:'Unknown'
    }
})
 
describe('Tests in notes actions', () => { 

    beforeAll(() => {
        global.setImmediate = (callback) => {
            setTimeout(callback, 0);
        };
    });
    test('should create new note with startNewNote', async() => { 
         //Al usar await se producía un error de ReferenceError: setImmediate is not defined
         //Pero el registro en firebase se creaba correctamente 
         //la configuración de beforeAll corrigió este error 
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

           //Eliminamos el registro  en la base de datos para pruebas, despues de hacer las comprobaciones
           const docId = actions[0].payload.id
           await db.doc(`TestingUID/journal/notes/${docId}`).delete();
                
     })
 })