import React from 'react'
import {Provider} from 'react-redux';
import renderer ,{act}from 'react-test-renderer';


import configureStore from 'redux-mock-store'
import { LoginScreen } from '../../../components/auth/LoginScreen';
import { startLogin, startRegister } from '../../../actions/auth';
import Swal from 'sweetalert2';

jest.mock('../../../actions/auth',()=>({
    startLogin:jest.fn(),
    startRegister:jest.fn()
}))

jest.mock('sweetalert2',()=>({
    fire:jest.fn()
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

    beforeEach(()=>{
        jest.clearAllMocks()
    })

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
     test('Passwords for register should been equals', () => { 

        act(()=>{

           wrapper.root.findByProps({name:'rPassword'}).props.onChange({
               target:{
                   name:'rPassword',
                   value:'123456'
               }
          });

       })
       act(()=>{

           wrapper.root.findByProps({name:'rPassword2'}).props.onChange({
            target:{
                name:'rPassword2',
                value:'1234567'
            }
           });

       })

        const form =  wrapper.root.findAllByType('form')
        form[1].props.onSubmit({preventDefault:jest.fn()});
        expect(startRegister).not.toHaveBeenCalled()
        expect(Swal.fire).toHaveBeenCalledWith('Error','Passwords must be the same')

      })
      test('should dispatch register with equal passwords', () => { 
        act(()=>{

            wrapper.root.findByProps({name:'rPassword'}).props.onChange({
                target:{
                    name:'rPassword',
                    value:'123456'
                }
           });
 
        })
        act(()=>{
 
            wrapper.root.findByProps({name:'rPassword2'}).props.onChange({
             target:{
                 name:'rPassword2',
                 value:'123456'
             }
            });
 
        })
 
         const form =  wrapper.root.findAllByType('form')
         form[1].props.onSubmit({preventDefault:jest.fn()});
         expect(startRegister).toHaveBeenCalledWith("", "", "123456")
         expect(Swal.fire).not.toHaveBeenCalled()
       })
 })