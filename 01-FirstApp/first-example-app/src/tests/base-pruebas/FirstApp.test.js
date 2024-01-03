import FirstApp from "../../FirstApp";
import {render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react'

describe('test in FirstApp', () => { 

    test('should return a greeting "Hola developer"', () => { 

        const greetingTest = "Hola developer";

        const {getByText} = render(<FirstApp greeting = {greetingTest}/>);
        
        expect(getByText(greetingTest)).toBeInTheDocument();

     });

     //Probando capturas de html con snapshots
     test('should show a title sending by props',()=>{

        const greetingTest = "Hola developer";

        const wrapper = renderer.create(<FirstApp greeting={greetingTest}/>);

        expect(wrapper).toMatchSnapshot();
     });
     //Probando encontrar el contenido dentro de un elemento del componente
     test('should show a subtitle sending by props', ()=>{
        const greetingTest = "Hola developer";
        const subtitleTest="Esfuerzate mucho"
        //const wrapper = renderer.create(<FirstApp greeting={greetingTest} subtitle={subtitleTest}/>);
        render(<FirstApp greeting={greetingTest} subtitle={subtitleTest}/>)
        //Usando RTL ya que enzyme está descontinuado para versiones posteriores a React 17
        expect(screen.getByRole('heading',{level : 2})).toHaveTextContent(subtitleTest);//El subtítulo se encuentra en una etiqueta h2
     });

})