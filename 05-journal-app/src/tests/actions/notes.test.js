import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
//todo corregir el error ReferenceError: TextDecoder is not defined
import { startNewNote } from '../../actions/notes'


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

    test('should create new note with startNewNote', async() => { 
        await store.dispatch(startNewNote());
     })
 })