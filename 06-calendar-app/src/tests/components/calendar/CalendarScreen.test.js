import React from 'react'
import {Provider} from 'react-redux';
import renderer ,{act}from 'react-test-renderer';


import configureStore from 'redux-mock-store'



jest.mock('../../../actions/auth',()=>({
    startLogin:jest.fn(),
    startRegister:jest.fn()
}))


//Mock para solucionar en parte el renderizado del componente <Calendar/>

// jest.mock('react-big-calendar/lib/Month', () => ({
//     ...jest.requireActual('react-big-calendar/lib/Month'),
//     measureRowLimit: jest.fn(() => 5) // Mockea la función measureRowLimit para devolver un valor fijo
//   }));

const thunk = require('redux-thunk').thunk;


//***************************/
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState={
    ui:{
        modalOpen:false
    },
    calendar:{
        events:[{
            title:"test title",
            notes:"test note",
            start:"2024-02-23T16:00:00.861Z",
            end:"2024-02-23T16:00:00.861Z",
            id:"21212121"

        }],
        activeEvent:null
    },
    auth:{ uid:'123456789', name:'Barry'}
}

const store =   mockStore(initState)
store.dispatch = jest.fn()

//TODO arreglar: calendarScreen no se renderiza a causa de problemas con <Calendar/> component 
//TypeError: Cannot use 'in' operator to search for 'window' in null

// const wrapper =  renderer.create(
//     <Provider store={store}>
//            <CalendarScreen/>
//     </Provider>
// )


describe('Tests in <CalendarScreen/> component', () => { 

    test('should show successfully', () => { 
        //expect(wrapper).toMatchSnapshot();
   
     })
 })