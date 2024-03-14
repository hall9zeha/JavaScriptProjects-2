/**
 * @jest-environment jsdom
 */
import {Provider} from 'react-redux';
import renderer ,{act}from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';

import { AppRouter } from '../../routers/AppRouter';
import configureStore from 'redux-mock-store'
import { render, fireEvent } from "@testing-library/react";
import { types } from '../../types/Types';
import {firebase} from '../../firebase/firebaseConfig'
import { Sidebar } from '../../components/journal/Sidebar';
import { startNewNote } from '../../actions/notes';
import { startLogout } from '../../actions/auth';

const thunk = require('redux-thunk').thunk;

jest.mock('../../actions/auth',()=>({
    startLogout:jest.fn()
}))
jest.mock('../../actions/notes',()=>({
    startNewNote:jest.fn()
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
        active:{id:'Abs'},
        notes:[]
    }
}
let store = mockStore(initState)
store.dispatch=jest.fn()

describe('Test in <Sidebar/> component', () => { 
    const wrapper = renderer.create(
        <Provider store={store}>
            <Sidebar/>
        </Provider>
    )
    test('should show successfully', () => { 
        expect(wrapper).toMatchSnapshot()
     })

    test('should call to logout', () => { 
        const btnLogout = wrapper.root.findByType('button')
        btnLogout.props.onClick()
        expect(startLogout).toHaveBeenCalled()
     })

    test('should call to startNewNote',()=>{
        const divNewEntry = wrapper.root.findByProps({className:'journal__new-entry'})
        divNewEntry.props.onClick()
        expect(startNewNote).toHaveBeenCalled()
    })
 })