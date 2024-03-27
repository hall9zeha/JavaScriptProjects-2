import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store'
import { startLogin } from '../../actions/auth';
import { types } from '../../types/types';

const thunk = require('redux-thunk').thunk;


//***************************/
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {};
let store = mockStore(initState);
Storage.prototype.setItem = jest.fn();

describe('Test in actions auth', () => { 

    beforeEach(()=>{
        store = mockStore(initState)
        jest.clearAllMocks();
    })

    test('startLogin sloud be successfully', async() => { 
        await store.dispatch(startLogin('barry@mail.com','123456'));
        const actions = store.getActions();
        console.log(actions);
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


 })