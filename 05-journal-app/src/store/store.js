// createstore está descontinuado al momento de realizar ste proyecto se podría usar de la siguiente manera
// import { legacy_createStore as createStore } from "redux";
// pero usaremos npm install @reduxjs/toolkit que es lo que se recomienda

//import { legacy_createStore as createStore } from "redux";
import { applyMiddleware, combineReducers, configureStore} from "@reduxjs/toolkit";
//import {combineReducers, createStore} from "redux"
import { authReducer } from "../reducers/authReducer";
import { thunk } from "redux-thunk";
import { uiReducer } from "../reducers/uiReducer";

// Al no poder enviar más de un reducer a través de configureStore usamos combineReducers

// No necesitamos llamar explícitamente a combineReducers para pasar más de un reducer a configureStore
// como con redux antiguamente

// const reducers = combineReducers({
//     auth:authReducer
// })


export const  store = configureStore({reducer:{
    auth:authReducer,
    ui:uiReducer
}},applyMiddleware(thunk))