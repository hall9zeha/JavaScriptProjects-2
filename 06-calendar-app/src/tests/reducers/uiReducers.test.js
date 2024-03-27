import { uiCloseModal, uiOpenModal } from "../../actions/ui";
import { uiReducer } from "../../reducers/uiReducers"

 
 const initstate = {
    modalOpen:false
 }
 
 describe('Tests in uiReducer', () => { 

    test('should return default state', () => { 
        const state = uiReducer(initstate,{});
        expect(state).toEqual(initstate); 

     })
     test('should open and close modal view', () => { 
        const modalOpen = uiOpenModal();
        const state = uiReducer(initstate,modalOpen);
        expect(state).toEqual({modalOpen:true});

        const modalClose = uiCloseModal();
        const stateClose = uiReducer(state,modalClose);

        expect(stateClose).toEqual({modalOpen:false});
      })
  })