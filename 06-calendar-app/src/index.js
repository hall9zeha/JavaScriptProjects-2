import React from 'react';
import ReactDOM from 'react-dom/client';
import { CalendarApp } from './CalendarApp';
import './styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(process.env)
root.render(

    <CalendarApp />

);

