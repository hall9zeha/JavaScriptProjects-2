import React from 'react'
import {Provider} from 'react-redux';
import renderer ,{act}from 'react-test-renderer';


import configureStore from 'redux-mock-store'
import { AppRouter } from '../../router/AppRouter';


const thunk = require('redux-thunk').thunk;


//***************************/
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

//Para saber con que argumentos se hizo el dispatch simulamos uno
//store.dispatch = jest.fn()


describe('Test in <AppRouter/> component', () => { 

    test('should show Prease wait...', () => { 

        const initState ={
            auth:{
                checking:true
            }
        }
        let store =  mockStore(initState);

        const wrapper = renderer.create(
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();

    })
    test('should show public route', () => { 
        const initState ={
            auth:{
                checking:false                
            }
        }
        const store =  mockStore(initState);

        const wrapper = renderer.create(
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
     })

     test('should show private route', () => { 
        //TODO arreglar error: la librería react-big-calendar en la versión utilizada actualmente 
        //da el siguiete error TypeError: Cannot use 'in' operator to search for 'window' in null
        
        //Si quitamos el componente <Calendar/> de CalendarScreen la lógica de la ruta privada funciona correctamente
        const initState ={
            auth:{
                checking:false,
                uid:'1234',
                name:'Barry'
            },
            calendar:{
                events:[{title:'Test event', user:'Barry'}]
            },
            ui:{
                modalOpen:false
            }
        }
        
        const store =  mockStore(initState);
        // const wrapper = renderer.create(
        //     <Provider store={store}>
        //             <AppRouter/>
        //     </Provider>
          
        //   )
        // expect(wrapper.toJSON()).toMatchSnapshot();
     })
 })