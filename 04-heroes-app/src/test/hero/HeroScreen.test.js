import { MemoryRouter, BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { HeroScreen } from '../../components/hero/HeroScreen';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navigate, useNavigate, useParams } from "react-router-dom";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Tests in <HeroScreen/> component', () => { 
   
    test('should t  show HeroScreen if haven t a hero in url', () => { 
        
        const wrapper = renderer.create(
            
           //TODO corregir: Si se le pone un initialEntries={['/hero']} para que devuelva  <h1>No hero page</h1> como se espera
           //la prueba pasa pero el snapshot devuelve nulo, sin  dichos argumentos el snapshot se genera correctamente
           //devolviendo <h1>No hero page</h1> 
            <MemoryRouter >
                <Routes>
                    <Route path="/hero" element = {<HeroScreen/>} />
                    <Route path="/" element = {<h1>No hero page</h1>} />
                </Routes>
            </MemoryRouter>
         
        )
       
        expect(wrapper).toMatchSnapshot()
        //expect(screen.container).toMatchSnapshot() //usando render
        
     })
     test('should  show a HeroScreen if have a hero parameter in url', () => { 
       const wrapper= renderer.create(
           
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path="/hero/:heroId" element = {<HeroScreen/>} />
                    <Route path="/" element = {<h1>No hero page</h1>} />
                </Routes>
            </MemoryRouter>
         
        )
    
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.root.findByType('h3').children[0].trim()).toBe('Spider Man')
        
     })
     test('should return to before screen if back button is pressed',()=>{
        const wrapper= renderer.create(
           
            <MemoryRouter initialEntries={['/hero/dc-batman']}>
                <Routes>
                    <Route path="/hero/:heroId" element = {<HeroScreen/>} />
                    <Route path="/" element = {<h1>No hero page</h1>} />
                </Routes>
            </MemoryRouter>
         
        )
        const btnBack = wrapper.root.findByType('button')
        btnBack.props.onClick()
        expect(mockNavigate).toHaveBeenCalledWith(-1)
     })

     test('should return No hero pages if hero not exists',()=>{
        const wrapper= renderer.create(
           
            <MemoryRouter >
                <Routes>
                    <Route path="/hero/:heroId" element = {<HeroScreen/>} />
                    <Route path="/" element = {<h1>No hero page</h1>} />
                </Routes>
            </MemoryRouter>
         
        )
        
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.root.findByType('h1')).toBeTruthy()
     })
 })