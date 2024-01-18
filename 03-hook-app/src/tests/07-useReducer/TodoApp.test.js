
import { prettyDOM, render, screen} from '@testing-library/react';
import React from 'react';

import renderer, { act } from "react-test-renderer";
import { TodoAddForm } from '../../components/07-useReducer/TodoAddForm';
import { TodoApp } from '../../components/07-useReducer/TodoApp';
import { TodoList } from '../../components/07-useReducer/TodoList';
import { todos } from '../../fixtures/DemoTodos';


describe('Tests in <TodoApp/> component', () => { 
    let wrapper = renderer.create(<TodoApp/>);
    Storage.prototype.setItem = jest.fn();


    test('should show successfully',()=>{

        expect(wrapper.toJSON()).toMatchSnapshot();
    })

    test('should add a TODO',()=>{
     
        
        const root = wrapper.root;
        //obtenemos una instancia de la función dentro del componente
        const handle=root.findByType(TodoAddForm).props.handleTodoAdd
        
        act(()=>{
            //Enviamos dos TODOS
            handle(todos[0])
            handle(todos[1])

        });
        
        const h1 = root.findByType('h1').props.children.join('');
             
        console.log(handle)
        //La etiqueta h1 debe tener el siguiente texto
        expect(h1).toBe('TodoApp (2)')
        //Debe de realizar dos inserciones en el LocalStorage
        expect(localStorage.setItem).toHaveBeenCalledTimes(2)
     
    })
    test('should delete a TODO',()=>{
        const wrapper = renderer.create(<TodoApp/>);
        const root = wrapper.root;
        //obtenemos una instancia de la función dentro del componente
        const handle=root.findByType(TodoAddForm).props.handleTodoAdd
        const handleDel=root.findByType(TodoList).props.handleDelete
        
        act(()=>{
      
            handle(todos[0])
            handleDel(todos[0].id)
        });
     
        const h1 = root.findByType('h1').props.children.join('');
        expect(h1).toBe('TodoApp (0)')
    })
 })