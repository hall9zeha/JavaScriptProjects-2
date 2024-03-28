import React from 'react'
import {Provider} from 'react-redux';
import renderer ,{act}from 'react-test-renderer';
import ReactDOM from 'react-dom';

import configureStore from 'redux-mock-store'
import { CalendarModal } from '../../../components/calendar/CalendarModal';
import moment from 'moment';
import { eventStartUpdate,eventClearActiveEvent } from '../../../actions/events';



jest.mock('../../../actions/events',()=>({
  eventStartUpdate:jest.fn(),
  eventClearActiveEvent:jest.fn()
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
    //El modal no se puede renderizar sin simular lo siguiente
    // beforeAll(() => {
    //     ReactDOM.createPortal = jest.fn((element, node) => {
    //       return element
    //     })
    //   })
  
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
        act(()=>{
          wrapper.root.findByType('form').props.onSubmit({preventDefault:jest.fn()})
        })
        
        expect(wrapper.root.findByProps({className:'form-control is-invalid'})).toBeTruthy()
       })
 })