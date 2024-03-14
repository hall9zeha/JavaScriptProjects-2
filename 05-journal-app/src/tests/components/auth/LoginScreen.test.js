/**
 * @jest-environment jsdom
 */
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import { LoginScreen } from '../../../components/auth/LoginScreen';
import {MemoryRouter} from 'react-router-dom';

import configureStore from 'redux-mock-store'



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

describe('Tests in <LoginScreen/> component', () => { 

    beforeEach(()=>{
        store=mockStore(initState)
    })

    test('should show successfully', () => { 
        const wrapper=renderer.create(
                <Provider store={store}>
                    <MemoryRouter>
                        <LoginScreen/>
                    </MemoryRouter>
                </Provider>)
        expect(wrapper).toMatchSnapshot()
    })
 })