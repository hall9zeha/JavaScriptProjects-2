import { Types } from "../types/Types";

export const authReducer = (state ={}, action)=>{

    switch (action.type) {
        case Types.login:
                return {
                    ...action.payload,
                    logged:true
                }
        case Types.logout:
            return {
                logged:false
            }
               
        default:
            return state;
    }
}