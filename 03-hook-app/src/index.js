import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterCustomHook } from './components/01-useState/CounterCustomHook';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { MultipleCustomHooks } from './components/03-Examples/MultipleCustomHooks';
import { FocusScreen } from './components/04-useRef/FocusScreen';
import RealExampleUseRef from './components/04-useRef/RealExampleUseRef';
import { LayoutEffect } from './components/05-useLayoutEffect/LayoutEffect';
import { CallbackHook } from './components/06-memos/CallbackHook';
import { MemoHook } from './components/06-memos/MemoHook';
import { Memorize } from './components/06-memos/Memorize';
import { IntroReducer } from './components/07-useReducer/IntroReducer';
import { HookApp } from './HookApp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <IntroReducer/>
 );
