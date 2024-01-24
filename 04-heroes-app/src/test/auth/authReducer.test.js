import { authReducer } from "../../auth/authReducer"
import { Types } from "../../types/Types";

describe('Tests in authReducer', () => { 

    test('should return default state', () => { 
        const state = authReducer({logged:false},{});
        expect(state).toEqual({logged:false});
     })
    test('should authenticate  and put username',()=>{
        const action ={
            type:Types.login,
            payload:{name:'Martha'}
        }
        const state = authReducer({logged:false},action);

        expect(state).toEqual({
            logged:true,
            name:'Martha'
        })
    })
    test('should erase username and put logged to false', ()=>{
        const action = {
            type:Types.logout
        }
        const state = authReducer({logged:true,name:'Martha'},action);

        expect(state).toEqual({logged:false});
    })
 })