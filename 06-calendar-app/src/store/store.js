import { applyMiddleware, combineReducers, configureStore} from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/rootReducer";
import { thunk } from "redux-thunk";
import { uiReducer } from "../reducers/uiReducers";

export const store =  configureStore({reducer:rootReducer},applyMiddleware(thunk))