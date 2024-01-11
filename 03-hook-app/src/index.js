import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterCustomHook } from './components/01-useState/CounterCustomHook';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { MultipleCustomHooks } from './components/03-Examples/MultipleCustomHooks';
import { FocusScreen } from './components/04-useRef/FocusScreen';
import RealExampleUseRef from './components/04-useRef/RealExampleUseRef';
import { HookApp } from './HookApp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <RealExampleUseRef />
 );

