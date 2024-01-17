import { todoReducer } from "../../components/07-useReducer/todoReducer"
import { todos } from "../../fixtures/DemoTodos";



describe('Tests in todoReducer', () => { 

    test('should return default state',()=>{
        const state = todoReducer(todos,{});
        expect(state).toEqual(todos);
    })
    test('should add one TODO',()=>{
        const newTodo={
            id:3,
            desc:'Learning Android flavors',
            done:false
        };
        const actionAdd={
            type:'add',
            payload:newTodo

        }
        const state = todoReducer(todos, actionAdd);
        expect(state.length).toBe(3);
        expect(state).toEqual([...todos,newTodo]);
    })

    test('should delete a TODO',()=>{
        const newTodo={
            id:3,
            desc:'Learning Android flavors',
            done:false
        };
        const actionAdd={
            type:'add',
            payload:newTodo

        }

        const actionDelete={
            type:'delete',
            payload:3
        }

        const state = todoReducer(todos,actionAdd)

        expect(state.length).toBe(3)

        const stateWithTodoDelete = todoReducer(state,actionDelete)

        expect(stateWithTodoDelete.length).toBe(2)

    });

    test('should change done state of TODO',()=>{
        const newTodo={
            id:3,
            desc:'Learning Android flavors',
            done:false
        };
        const actionAdd={
            type:'add',
            payload:newTodo

        }
        const actionDone={
            type:'done',
            payload:3

        }

       

        const state = todoReducer(todos,actionAdd)

        expect(state.length).toBe(3)
        expect(state[2].done).toBe(false)//nuestro TODO insertado está en la tercera posición

        const stateDone = todoReducer(state,actionDone)
        expect(stateDone[2].done).toBe(true)//Debe retornar estado completado o true
       
    });
 })