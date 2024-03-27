import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types"

const initialState ={
    checking:true
}
describe('Test in authReducer', () => { 

    test('should return default state', () => { 
        const action={}
        const state = authReducer(initialState,action);
        expect(state).toEqual(initialState)
     })
     test('should authenticate a user', () => { 
        const action =  {
            type:types.authLogin,
            payload:{
                uid:'12345',
                name:'Barry'
            }
        }

        const state = authReducer(initialState,action);
        expect(state).toEqual({checking:false,uid:'12345',name:'Barry'});
      })
 })