import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/Types";

describe('Tests in authReducer', () => { 
    test('should login', () => { 
        const initState = {};
        const action = {
            type:types.login,
            payload:{
                uid:'abcd',
                displayName:'Martha'
            }
        }

        const state = authReducer(initState, action)
        expect(state).toEqual({
            uid:'abcd',
            name:'Martha'
        })
     })
     test('should logout', () => { 
        const initState = {
            uid:'abcd',
            displayName:'Barry'};
        const action = {
            type:types.logout          
        }

        const state = authReducer(initState, action)
        expect(state).toEqual({}) //debe de ser igual a un objeto vacío
     })
     test("shouldn't change state", () => { 
        const initState = {
            uid:'abcd',
            displayName:'Martha'};
        const action = {
            type:'unknown type'          
        }

        const state = authReducer(initState, action)
        expect(state).toEqual(initState) //debe de ser igual al estado inicial
     })
 })