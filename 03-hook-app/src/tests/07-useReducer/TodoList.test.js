import { render} from '@testing-library/react';
import React from 'react';

import renderer from "react-test-renderer";
import { TodoList } from '../../components/07-useReducer/TodoList';
import { todos } from '../../fixtures/DemoTodos';

const handleDeleteMocked = jest.fn();
const handleDoneTaskMocked = jest.fn();

describe('Tests in <TodoList/> component', () => { 
    test('should show successful', () => { 
        const wrapper = renderer.create(<TodoList 
            todos={todos}
            handleDoneTask={handleDoneTaskMocked} 
            handleDelete={handleDeleteMocked}/>).toJSON();

        expect(wrapper).toMatchSnapshot()

     })
     test('should show the elements number of TODOS send',()=>{
        const   {container} = render(<TodoList 
            todos={todos}
            handleDoneTask={handleDoneTaskMocked} 
            handleDelete={handleDeleteMocked}/>);
                    

        const todoListItems = container.getElementsByClassName('list-group-item');
        expect(todoListItems.length).toBe(todos.length);
       
        
     })

 })