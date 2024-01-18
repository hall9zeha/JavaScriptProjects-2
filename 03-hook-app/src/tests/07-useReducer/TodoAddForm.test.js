import { render} from '@testing-library/react';
import React from 'react';

import renderer, { act } from "react-test-renderer";
import { TodoAddForm } from '../../components/07-useReducer/TodoAddForm';
import { TodoList } from '../../components/07-useReducer/TodoList';
import { todos } from '../../fixtures/DemoTodos';

const handleTodoAddMock = jest.fn();
describe('Tests in <TodoAddForm/> component', () => {

    let wrapper = renderer.create(<TodoAddForm handleTodoAdd={handleTodoAddMock}/>);
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = renderer.create(<TodoAddForm handleTodoAdd={handleTodoAddMock}/>);
    })

    test('should show successfully', () => {
       
        expect(wrapper.toJSON()).toMatchSnapshot()
      })

    test("should't  call handleTodoAdd function",async ()=>{
        //El hecho de buscar con findByType devuelve una promesa por eso debe ser async
        const form = await wrapper.root.findByType('form');
        act(()=>{
            form.props.onSubmit({preventDefault(){}})
        })
        //La función no debe llamarse ni una sola vez
        expect(handleTodoAddMock).toHaveBeenCalledTimes(0)
    })
    test('should call to handleTodoAdd function', async()=>{
        const value = 'Learn Ruby';
        const input = await wrapper.root.findByType('input');

        act(()=>{
            input.props.onChange({target:{value,name:'description'}})
        })

        const form = await wrapper.root.findByType('form');
        act(()=>{
            form.props.onSubmit({preventDefault(){}})
        })
        //Ahora si la función  debe llamarse una vez
        expect(handleTodoAddMock).toHaveBeenCalledTimes(1)
        //Probamos que se haya devuleto un objeto que no se vació
        expect(handleTodoAddMock).toHaveBeenCalledWith(
            {
                //Como nuestro id es el tiempo en milisegundos, cambiará cada vez
                //así que solo pediremos que sea un número
                id:expect.any(Number),
                desc:value,
                done:false
            }
        )
        //Después del submit debe limpiarse la caja de texto y estar vacía
        expect(input.props.value).toBe('')

    })
})