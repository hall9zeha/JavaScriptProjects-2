import React from "react";
import { AddCategory } from "../../components/AddCategory";
import {render, screen, fireEvent } from '@testing-library/react';
import renderer, {act} from 'react-test-renderer';


describe('Tests in <AddCategory/> component', () => { 

    const setCategoryTest= () => {};
    const wrapper = renderer.create(<AddCategory setCategories={setCategoryTest}/>);

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
 })