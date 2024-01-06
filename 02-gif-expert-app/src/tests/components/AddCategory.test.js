import React from "react";
import { AddCategory } from "../../components/AddCategory";
import {render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';


describe('Tests in <AddCategory/> component', () => { 

    const setCategoryTest= () => {};
    const wrapper = renderer.create(<AddCategory setCategories={setCategoryTest}/>);

    test('should show successfuly', () => { 
        
        const tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();
     })
 })