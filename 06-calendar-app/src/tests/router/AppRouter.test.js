import React from 'react'
import {Provider} from 'react-redux';
import renderer ,{act}from 'react-test-renderer';


import configureStore from 'redux-mock-store'
import { AppRouter } from '../../router/AppRouter';


const thunk = require('redux-thunk').thunk;


//***************************/
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

//Para saber con que argumentos se hizo el dispatch simulamos uno
//store.dispatch = jest.fn()


describe('Test in <AppRouter/> component', () => { 

    test('should show Prease wait...', () => { 

        const initState ={
            auth:{
                checking:true
            }
        }
        let store =  mockStore(initState);

        const wrapper = renderer.create(
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();

    })
 })