import React from 'react'
import {Provider} from 'react-redux';
import renderer ,{act}from 'react-test-renderer';


import configureStore from 'redux-mock-store'
import { LoginScreen } from '../../../components/auth/LoginScreen';
import { startLogin } from '../../../actions/auth';

jest.mock('../../../actions/auth',()=>({
    startLogin:jest.fn()
}))

const thunk = require('redux-thunk').thunk;


//***************************/
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState={}
const store =   mockStore(initState)
store.dispatch = jest.fn()

const wrapper =  renderer.create(
    <Provider store={store}>
        <LoginScreen/>
    </Provider>
)

describe('Test in <LoginScreen/> component', () => { 

    test('should show successfully', () => { 

        expect(wrapper).toMatchSnapshot()
     })
    test('should call dispatch login', () => { 

       act(()=>{

           wrapper.root.findByProps({name:'lEmail'}).props.onChange({
               target:{
                   name:'lEmail',
                   value:'martha@mail.com'
               }
          });

       })
       act(()=>{

           wrapper.root.findByProps({name:'lPassword'}).props.onChange({
            target:{
                name:'lPassword',
                value:'123456'
            }
           });

       })
        const form =  wrapper.root.findAllByType('form')
        form[0].props.onSubmit({preventDefault:jest.fn()});
        
        expect(startLogin).toHaveBeenCalledWith("martha@mail.com", "123456");
     })

 })