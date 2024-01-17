import { todoReducer } from "../../components/07-useReducer/todoReducer"
import { todos } from "../../fixtures/DemoTodos";



describe('Tests in todoReducer', () => { 

    test('should return default state',()=>{
        const state = todoReducer(todos,{});
        expect(state).toEqual(todos);
    })

 })