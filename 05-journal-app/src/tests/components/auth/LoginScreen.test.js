/**
 * @jest-environment jsdom
 */
import {Provider} from 'react-redux';
import renderer, {act}from 'react-test-renderer';
import { LoginScreen } from '../../../components/auth/LoginScreen';
import {MemoryRouter} from 'react-router-dom';

import configureStore from 'redux-mock-store'
import { render, fireEvent } from "@testing-library/react";
import { startLoginWithEmailPassword, startLoginWithGoogle } from '../../../actions/auth';



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
store.dispatch=jest.fn()
jest.mock('../../../actions/auth',()=>({
    startLoginWithGoogle:jest.fn(),
    startLoginWithEmailPassword:jest.fn()
}))

describe('Tests in <LoginScreen/> component', () => { 
    const wrapper=renderer.create(
        <Provider store={store}>
            <MemoryRouter>
                <LoginScreen/>
            </MemoryRouter>
        </Provider>)

    beforeEach(()=>{
        store=mockStore(initState)
        jest.clearAllMocks();
    })

    test('should show successfully', () => { 
        
        expect(wrapper).toMatchSnapshot()
    })
    test('should fire the google login event', async () => { 
        
        const btnGoogle = await  wrapper.root.findByProps({className:'google-btn'});
        btnGoogle.props.onClick()
        expect(startLoginWithGoogle).toHaveBeenCalled()
    })
    test('should fire the login with email and password', async() => { 
        const btnLoginEmailPassword = await wrapper.root.findByType('form');
        
        btnLoginEmailPassword.props.onSubmit({preventDefault:jest.fn()})
        expect(startLoginWithEmailPassword).toHaveBeenCalledWith('martha@mail.com','123456')
    })
 })