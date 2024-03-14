/**
 * @jest-environment jsdom
 */
import {Provider} from 'react-redux';
import renderer ,{act}from 'react-test-renderer';


import configureStore from 'redux-mock-store'

import { NoteScreen } from '../../../components/notes/NoteScreen';
import { activeNote } from '../../../actions/notes';


const thunk = require('redux-thunk').thunk;

jest.mock('../../../actions/notes',()=>({
    activeNote:jest.fn()
}))


//***************************/
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
    auth:{
        id:'123',
        name:'Martha'
    },
    ui:{
        loading:false,
        msgError:null
    },
    notes:{
        active:{
            id:'Abs',
            title:'Hola',
            body:'Esta es una prueba'
        },
        notes:[]
    }
}
let store = mockStore(initState)
store.dispatch=jest.fn()

describe('Tests in <NoteScreen/> component', () => { 
    const wrapper = renderer.create(
        <Provider store={store}>
            <NoteScreen/>
        </Provider>
    )
    test('should show successfully', () => { 
        expect(wrapper).toMatchSnapshot()
     })
    test('should call activeNote actions when change a textInput value',()=>{
        const txtTitle = wrapper.root.findByProps({name:'title'})
        const value='Hello world'
        act(()=>{
            txtTitle.props.onChange({target:{
                name:'title',
                value:value
            }})
        })
       //Ya que se ejecuta dos veces: activeNote al cargar la nota y la segunda al realizar las modificaciones
       //Solo nos centraremos en la última llamada
        expect(activeNote).toHaveBeenLastCalledWith('Abs',{
            body:'Esta es una prueba',
            title:'Hello world',
            id:'Abs'
        })
    })
 })