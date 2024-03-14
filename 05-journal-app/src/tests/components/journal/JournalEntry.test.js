/**
 * @jest-environment jsdom
 */
import {Provider} from 'react-redux';
import renderer ,{act}from 'react-test-renderer';


import configureStore from 'redux-mock-store'
import { JournalEntry } from '../../../components/journal/JournalEntry';
import { activeNote } from '../../../actions/notes';

const thunk = require('redux-thunk').thunk;


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
        active:{id:'Abs'},
        notes:[]
    }
}
let store = mockStore(initState)
store.dispatch=jest.fn()

const note = {
    id:24,
    date:2024,
    title:'Hello',
    body:'world',
    url:'https://mockweb.com/image.jpg'
}

describe('Test in <Journalentry/> component', () => { 
    const wrapper = renderer.create(
        <Provider store={store}>
            <JournalEntry {...note}/>
        </Provider>
    )
    test('should show successfully', () => { 
        expect(wrapper).toMatchSnapshot()
     })
    test('should activate note', () => {
        const newNote  = wrapper.root.findByProps({className:'journal__entry pointer animate__animated animate__fadeIn animated__faster'});
        newNote.props.onClick();
        //Con activeNote evaluamos que se haya activado la misma nota que hemos creado en la parte superior
        //Ya que nos devuelve una acción como la siguiente:
        /*
            {
                type: '[Notes] Set active note',
                payload: {
                    id: 24,
                    date: 2024,
                    title: 'Hello',
                    body: 'world',
                    url: 'https://mockweb.com/image.jpg'
                    }
            }
        
        */
        expect(store.dispatch).toHaveBeenCalledWith(activeNote(note.id,{...note}))
    
    })
})