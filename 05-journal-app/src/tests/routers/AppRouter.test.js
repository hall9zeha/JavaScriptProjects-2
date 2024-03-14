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
import { login } from '../../actions/auth';

const thunk = require('redux-thunk').thunk;

jest.mock('../../actions/auth',()=>({
    login:jest.fn()
}))


//***************************/
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
    auth:{},
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




describe('Test in <AppRouter/> component',() => { 
    
    test('should  call to login if is authenticated', async() => { 
        let user;
        await act(async()=>{
            //Usamos esta configuración para ejecutar llamadas a firebase en el entorno jsdom
            //con respecto a este problema revisar https://github.com/firebase/firebase-admin-node/issues/1135
            const tmp = global.window;
            delete global.window;
            ///*************************/

            const userCred =  await firebase.auth().signInWithEmailAndPassword('test@mail.com','123456')
            user = userCred.user
            
            /* volvemos a restablecer la configuración original */
            global.window = tmp;

            const wrapper=renderer.create(
                <Provider store={store}>
                    <MemoryRouter>
                        <AppRouter/>
                    </MemoryRouter>
                </Provider>)

           
            
        })
        expect(login).toHaveBeenCalled()
        
    })
 })