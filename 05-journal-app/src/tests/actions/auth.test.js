import configureStore from 'redux-mock-store'
import { login, logout, startLoginWithEmailPassword, startLogout } from "../../actions/auth"
import { types } from "../../types/Types";
import { type } from '@testing-library/user-event/dist/type';



const thunk = require('redux-thunk').thunk;
//***************************/
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {}
let store = mockStore(initState)

describe('Test in auth actions', () => { 
    beforeEach(()=>{
        store=mockStore(initState)
    })

    test('should create login or logout actions', () => { 
        const uid='abdc12333';
        const displayName='Barry';
        const loginAction = login(uid,displayName);
        const logoutActions = logout();

        expect(loginAction).toEqual({
            type:types.login,
            payload:{
                uid,
                displayName
            }
        })
        expect(logoutActions).toEqual({
            type:types.logout
        })
     })
     test('should launch startLogout', async() => { 
        await store.dispatch(startLogout())
        const actions = store.getActions()
        console.log(actions);

        expect(actions[0]).toEqual({
            type:types.logout
        })

        expect(actions[1]).toEqual({
            type:types.notesLogoutCleaning
        })
      })
      test('should launch startWithEmailPassword', async() => { 
            await store.dispatch(startLoginWithEmailPassword('test@mail.com','123456'));
            const actions = store.getActions()
            console.log(actions)
            expect(actions[1]).toEqual({
                type:types.login,
                payload:{
                    uid:'JoOIVACx7RggrwI4MRC40sKxVDx1',//poner el que tengas en tu usuario de prueba en firebase
                    displayName:null
                }
            })
       })
 })