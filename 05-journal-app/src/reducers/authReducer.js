import React from 'react'
import { types } from '../types/Types';

export const authReducer = (state = {}, action) => {
    switch(action.types){
        case types.login:
            return{
                uid: action.payload.uid,
                name: action.payload.displayName
            };
        case types.logout:
            return {}
        default:
            return state;

    }
}
