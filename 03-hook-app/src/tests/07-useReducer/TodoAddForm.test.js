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

    test("should't  call handleTodoadd function",async ()=>{
        //El hecho de buscar con findByType devuelve una promesa por eso debe ser async
        const form = await wrapper.root.findByType('form');
        act(()=>{
            form.props.onSubmit({preventDefault(){}})
        })
        //La función no debe llamarse ni una sola vez
        expect(handleTodoAddMock).toHaveBeenCalledTimes(0)
    })
    
})