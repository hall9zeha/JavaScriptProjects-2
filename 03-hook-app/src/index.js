import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterCustomHook } from './components/01-useState/CounterCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { HookApp } from './HookApp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <SimpleForm />
  
);

