import {render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react'
import CounterApp from '../../CounterApp';

describe('Tests in CounterApp', () => { 

    test('should show CounterApp successful', () => { 

        render(<CounterApp/>);
        expect(screen).toMatchSnapshot();
     })

    test('should show default value 100', () => { 
        render(<CounterApp value={100}/>);
       
        expect(screen.getByRole('heading', {level:2})).toHaveTextContent('100');
     })

     test('should increase with the button +', () => { 
        
        render(<CounterApp/>);

        const addButton = screen.getByRole('button',{name:'+1'}) 
        fireEvent.click(addButton);

        expect(screen.getByRole('heading', {level:2})).toHaveTextContent('26');

     })


     test('should decrease with the button -', () => { 
        
        render(<CounterApp/>);

        const lessButton = screen.getByRole('button',{name:'-1'}) 
        fireEvent.click(lessButton);

        expect(screen.getByRole('heading', {level:2})).toHaveTextContent('24');

     });

     test('should reset value to 25 when press the button "reset"', () => { 
        
        render(<CounterApp value={25}/>);

        const addButton = screen.getByRole('button',{name:'+1'}) 
        const resetButton = screen.getByRole('button',{name:'reset'}) 
        const lessButton = screen.getByRole('button',{name:'-1'}) 
        fireEvent.click(addButton);
        fireEvent.click(lessButton);
        fireEvent.click(resetButton);

        expect(screen.getByRole('heading', {level:2})).toHaveTextContent('25');

     })
 })