import React from "react";
import { AddCategory } from "../../components/AddCategory";
import {render, screen, fireEvent } from '@testing-library/react';
import renderer, {act} from 'react-test-renderer';


describe('Tests in <AddCategory/> component', () => { 

    const setCategoryTest= jest.fn(); // Para saber si la función fue llamada o de que forma fue utilizada usamos jest.fn()
                                      //wue simula todas las características de una función
    let wrapper = renderer.create(<AddCategory setCategories={setCategoryTest}/>);

    //Limpiamos todas las pruebas
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = renderer.create(<AddCategory setCategories={setCategoryTest}/>);
    })

    test('should show successfuly', () => { 
        
        const tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();
     });

    test('should change input box',()=>{
        const input = wrapper.root.findByType('input');
        //const p = wrapper.root.findByType('p'); este elemento <p>  fue retirado del componente

        const value = 'Hello world';
        act(()=>{
            input.props.onChange({ target: { value} });
        })
        //expect(p.props.children).toBe(value);
    });

    test('should not post anything on the submit',()=>{
        const form = wrapper.root.findByType('form');
        act(()=>{
            form.props.onSubmit({preventDefault(){}})
        })
    })

    test('should call setCategory function and clear the text box',()=>{

        //Simulando el input change
        const input = wrapper.root.findByType('input');
        const form = wrapper.root.findByType('form');
        const value = 'Hello world';
        act(()=>{
            input.props.onChange({target:{value}})
        })
        //Simulando el submit
        act(()=>{
            form.props.onSubmit({preventDefault(){}});
        })
        //Verificando si setCategory se llama al menos una vez
        expect(setCategoryTest).toHaveBeenCalled();
        //Verificando que la función sea llamada solo una vez
        expect(setCategoryTest).toHaveBeenCalledTimes(1);
        //Verificando que se haya llamado a una función
        expect(setCategoryTest).toHaveBeenCalledWith(expect.any( Function ));

        //Verificando que el input esté vacío
        expect(input.props.value).toBe('');
    });
 })