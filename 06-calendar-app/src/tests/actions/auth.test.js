import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store'
import { startLogin, startRegister } from '../../actions/auth';
import { types } from '../../types/types';
import Swal from 'sweetalert2';
import * as fetchModule from '../../helpers/fetch';



const thunk = require('redux-thunk').thunk;


//***************************/
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {};
let store = mockStore(initState);
Storage.prototype.setItem = jest.fn();

//Swal alert mock
jest.mock('sweetalert2',()=>({
    fire:jest.fn()
}))

describe('Test in actions auth', () => { 

    beforeEach(()=>{
        store = mockStore(initState)
        jest.clearAllMocks();
    })

    test('startLogin should be successfully', async() => { 
        await store.dispatch(startLogin('barry@mail.com','123456'));
        const actions = store.getActions();
        //console.log(actions);
        expect(actions[0]).toEqual({
            type:types.authLogin,
            payload:{
                uid:expect.any(String),
                name:expect.any(String)
            }
        })

        expect(localStorage.setItem).toHaveBeenCalledWith('token',expect.any(String));
        expect(localStorage.setItem).toHaveBeenCalledWith('token-init-date',expect.any(Number));

        //Podemos obtener los argumentos dentro de las llamadas de nuestra función simulada de jest a localStore
        //const calls = localStorage.setItem.mock.calls
        //console.log(calls);
     })
     test('should return error with incorrect login', async() => { 

        await store.dispatch(startLogin('barry@mail.com','12345678'));
        let actions = store.getActions();
        //Ya que  el login es incorrecto no debe ejecutar ninguna acción
        expect(actions).toEqual([]);
        expect(Swal.fire).toHaveBeenCalledWith("Error","Password invalid","error");

        await store.dispatch(startLogin('isabel@mail.com','12345689'));
        actions = store.getActions();

        expect(Swal.fire).toHaveBeenCalledWith("Error", "The user with this email not exists", "error");

      })

      test('startRegister should be successfully', async() => {

        fetchModule.fetchWithoutToken = jest.fn(() =>({
            json(){
                return {
                    ok:true,
                    uid:'1234',
                    name:'some-user',
                    token:'hsgsgafttuiwolqñ'
                }
            }
        }))

        await store.dispatch(startRegister('test@mail.com','123456','test-user'))
        const actions = store.getActions()
        //console.log(actions)
        expect(actions[0]).toEqual({ 
            type: types.authLogin, 
            payload: { 
                uid: '1234', 
                name: 'some-user' 
            } })
        expect(localStorage.setItem).toHaveBeenCalledWith('token',expect.any(String));
        expect(localStorage.setItem).toHaveBeenCalledWith('token-init-date',expect.any(Number));
      })
 })