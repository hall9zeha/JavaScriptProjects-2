/**
 * @jest-environment jsdom
 */
import {Provider} from 'react-redux';
import renderer ,{act}from 'react-test-renderer';
import { LoginScreen } from '../../../components/auth/LoginScreen';
import {MemoryRouter} from 'react-router-dom';

import configureStore from 'redux-mock-store'
import { render, fireEvent } from "@testing-library/react";
import { RegisterScreen } from '../../../components/auth/RegisterScreen';
import { types } from '../../../types/Types';



const thunk = require('redux-thunk').thunk;
//***************************/
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
    auth:{},
    ui:{
        loading:false,
        msgError:null
    }
}
let store = mockStore(initState)
//Para simular el dispatch y evaluar como son llamadas las funciones 
//En esta prueba las acciones llamadas son síncronas por eso no la usaremos
//store.dispatch=jest.fn()

jest.mock('../../../actions/auth',()=>({
    startLoginWithGoogle:jest.fn(),
    startLoginWithEmailPassword:jest.fn()
}))


describe('Test in <RegisterScreen/> component', () => { 
    beforeEach(()=>{
         
            jest.clearAllMocks();
        }
    )
    const wrapper = renderer.create( <Provider store={store}>
        <MemoryRouter>
            <RegisterScreen/>
        </MemoryRouter>
    </Provider>)

    test('should show successfully', () => { 
        expect(wrapper).toMatchSnapshot()
     })
    test('should dispatch of respective action', async() => { 
        const txtName = await wrapper.root.findAllByProps({name:'name'});//Devuelve un array debemos escoger la primera posición [0]
        const txtEmail = await wrapper.root.findAllByProps({name:'email'})//Devuelve un array debemos escoger la primera posición [0]
        const form = await wrapper.root.findByType('form')
        const value='Barry'
        
        act(()=>{
            txtName[0].props.onChange({target:{
                value:value,
                name:'name'
            }})
        })
        act(()=>{
            txtEmail[0].props.onChange({target:{
                value:'',
                name:'email'
            }})
        })
        form.props.onSubmit({preventDefault:jest.fn()})
        const actions = store.getActions();
        console.log(actions)
        expect(actions[0]).toEqual({
            type:types.uiSetError,
            payload:'Email is not valid'
        })
        
     })
     test('should show alert box with error', async() => {

            const initState = {
                auth:{},
                ui:{
                    loading:false,
                    msgError:'Email no es válido'
                }
            }
            const store = mockStore(initState)
            const wrapper = renderer.create( <Provider store={store}>
                <MemoryRouter>
                    <RegisterScreen/>
                </MemoryRouter>
            </Provider>)
            
            const errorBox =  await wrapper.root.findByProps({className:'auth__alert-error'})
            
            expect(errorBox).toBeTruthy()
            expect(errorBox.props.children.trim()).toBe(initState.ui.msgError)

      })
 })