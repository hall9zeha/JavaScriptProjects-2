import React from 'react'
import {Provider} from 'react-redux';
import renderer ,{act}from 'react-test-renderer';
import ReactDOM from 'react-dom';

import configureStore from 'redux-mock-store'
import { CalendarModal } from '../../../components/calendar/CalendarModal';
import moment from 'moment';
import { eventStartUpdate,eventClearActiveEvent, eventStartAddNew } from '../../../actions/events';
import Swal from 'sweetalert2';

jest.mock('sweetalert2',()=>({
  fire:jest.fn()
}))

jest.mock('../../../actions/events',()=>({
  eventStartUpdate:jest.fn(),
  eventClearActiveEvent:jest.fn(),
  eventStartAddNew:jest.fn()
}))

//Si usamos react-renderer y queremos hacer snapshots en componentes modales
//debemos burlar(hacer un mock) a react doom
jest.mock('react-dom', () => {
    const original = jest.requireActual('react-dom');
      return {
      ...original,
      createPortal: (node) => node,
    };
  });

const thunk = require('redux-thunk').thunk;


//***************************/
const middlewares = [thunk]
const mockStore = configureStore(middlewares)



const nowDate =  moment().minutes(0).seconds(0).add(1,'hours')
const nowDatePlus = nowDate.clone().add(1,'hours')

const initState={
    ui:{
        modalOpen:true,
    },
    calendar:{
        events:[],
        activeEvent:{
            title:"test title",
            notes:"test note",
            start:nowDate.toDate(),
            end:nowDatePlus.toDate(),
            id:'123'
        }
    },
    auth:{ uid:'123456789', name:'Barry'}
}

const store =   mockStore(initState)
store.dispatch = jest.fn()

const wrapper =  renderer.create(
    <Provider store={store}>
           <CalendarModal/>
    </Provider>
)


describe('Tests in <CalendarModal/> component', () => { 
    
  
    afterEach(() => {
      //ReactDOM.createPortal.mockClear()
      jest.clearAllMocks()
    })

    test('should show successfully', () => { 
        expect(wrapper).toMatchSnapshot()
    })
     test('should call update action and close modal', () => { 
      act(()=>{
        wrapper.root.findByType('form').props.onSubmit({preventDefault:jest.fn()})
      })
        
        expect(eventStartUpdate).toHaveBeenCalledWith({
          title:"test title",
          notes:"test note",
          start:nowDate.toDate(),
          end:nowDatePlus.toDate(),
          id:'123'
      })
        expect(eventClearActiveEvent).toHaveBeenCalled()
      })

      test('should show error if title is empty', () => { 
        //Disparamos el evento submit de nuestro formulario
        act(()=>{
          wrapper.root.findByType('form').props.onSubmit({preventDefault:jest.fn()})
        })
        
        expect(wrapper.root.findByProps({className:'form-control is-invalid'})).toBeTruthy()
       })

       test('should create a new event', () => { 

            const initState={
              ui:{
                  modalOpen:true,
              },
              calendar:{
                  events:[],
                  activeEvent:null
              },
              auth:{ uid:'123456789', name:'Barry'}
            }

            const store =   mockStore(initState)
            store.dispatch = jest.fn()

            const wrapper =  renderer.create(
              <Provider store={store}>
                    <CalendarModal/>
              </Provider>
            )
            
           wrapper.root.findByProps({name:'title'}).props.onChange({target:{
              name:'title',
              value:'Hello test'
           }})
           //Disparamos el evento submit de nuestro formulario
           act(()=>{
            wrapper.root.findByType('form').props.onSubmit({preventDefault:jest.fn()})
          })
          expect(eventStartAddNew).toHaveBeenCalledWith({
            end: expect.anything(),
            notes: expect.any(String), 
            start: expect.anything(),
            title: "Hello test"})

          expect(eventClearActiveEvent).toHaveBeenCalled()

          
        })
      test('should validate dates', () => { 
    
            wrapper.root.findByProps({name:'title'}).props.onChange({target:{
              name:'title',
              value:'Hello test'
          }})

          const picker = wrapper.root.findByProps({testId:'picker2'})
          //Al cambiarle la fecha por la misma que tiene el datePicker 1
          //Debe lanzar un error de validación, porque la fecha 2 debe ser mayor que la primera
          const now = new Date();

          picker.props.onChange({target:{
            value:now
          }})

          act(()=>{
            wrapper.root.findByType('form').props.onSubmit({preventDefault:jest.fn()})
          })

          expect(Swal.fire).toHaveBeenCalledWith("Error", "La fecha fin debe ser mayor que la fecha de inicio")
          
       })
 })