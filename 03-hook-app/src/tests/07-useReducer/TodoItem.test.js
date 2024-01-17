import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { TodoItem } from '../../components/07-useReducer/TodoItem';
import { todos } from '../../fixtures/DemoTodos';

describe('Tests in <TodoItem/> Component', () => { 
    const handleDeleteMocked = jest.fn();
    const handleDoneTaskMocked = jest.fn();
    
    const wrapper = renderer.create(<TodoItem todo={todos[0]} 
        index = {0} 
        handleDelete={handleDeleteMocked}
        handleDoneTask={handleDoneTaskMocked}/>).toJSON()


    test('should show  successful', () => { 
        
        expect(wrapper).toMatchSnapshot();
     });

    test('should call to handleDelete function',()=>{
        
        render(<TodoItem
            todo={todos[0]} 
            index = {0} 
            handleDelete={handleDeleteMocked}
            handleDoneTask={handleDoneTaskMocked}
        />)
        const btnDelete = screen.queryByTestId('btn-delete');   
        fireEvent.click(btnDelete);
        expect(handleDeleteMocked).toHaveBeenCalledWith(todos[0].id);

    });

    test('should call to handleToogle function',()=>{
        const {container} =render(<TodoItem
            todo={todos[0]} 
            index = {0} 
            handleDelete={handleDeleteMocked}
            handleDoneTask={handleDoneTaskMocked}
        />)
        //Solo tenemos una etiqueta <p/>
        //si tuviéramos más deberíamos de asignarle in id para encontrar uno en específico
        const p = container.querySelector('p');
        fireEvent.click(p);
        expect(handleDoneTaskMocked).toHaveBeenCalledWith(todos[0].id)
        
    })

    test('should display a text correctly',()=>{
        const {container} =render(<TodoItem
            todo={todos[0]} 
            index = {0} 
            handleDelete={handleDeleteMocked}
            handleDoneTask={handleDoneTaskMocked}
        />)
        const p = container.querySelector('p');
       
        expect(p.textContent).toBe(`1.${todos[0].desc}`);
    })
    test('should content "complete" className in paragraph',()=>{
        const todoCompleted = todos[0];
        todoCompleted.done=true;

        const {container} =render(<TodoItem
            todo={todoCompleted} 
            index = {0} 
            handleDelete={handleDeleteMocked}
            handleDoneTask={handleDoneTaskMocked}
        />)
        const p = container.querySelector('p');
       
        expect(p.className).toBe('complete');
    })

 })