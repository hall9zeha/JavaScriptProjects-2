
import React from 'react'
import {Provider} from 'react-redux';
import renderer ,{act}from 'react-test-renderer';


import configureStore from 'redux-mock-store'
import { DeleteEventFab } from '../../../components/ui/DeleteEventFab';
import { eventStartDelete } from '../../../actions/events';

jest.mock('../../../actions/events',()=>({
    eventStartDelete:jest.fn()
}))

const thunk = require('redux-thunk').thunk;


//***************************/
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState ={}
let store =  mockStore(initState);

//Para saber con que argumentos se hizo el dispatch simulamos uno
store.dispatch = jest.fn()

const wrapper = renderer.create(
    <Provider store={store}>
        <DeleteEventFab/>
    </Provider>
)

describe('Tests in <DeleteEventFab/> component', () => { 

    test('should to match with snapshot', () => { 
        expect(wrapper).toMatchSnapshot()
     })
     test('should call to eventstartDelete when clicked button', () => { 
        const btnDel= wrapper.root.findByType('button');
        btnDel.props.onClick();
        expect(eventStartDelete).toHaveBeenCalled()
      })
})