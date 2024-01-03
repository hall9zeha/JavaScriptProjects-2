import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import CounterApp from './CounterApp';
import FirstApp from './FirstApp';
import './index.css';


const divRoot = document.querySelector('#root');
const root = createRoot(divRoot)
//enviando propiedade al componente
//root.render(<FirstApp greeting = "Hola soy Barry"/>)

//Segundo componente 
root.render(<CounterApp value={25}/>)

//root.render(<FirstApp greeting='Hola developer'/>)

