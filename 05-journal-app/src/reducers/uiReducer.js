import { types } from "../types/Types";

const initialState = {
    loading:false,
    msgError:null
}

export const uiReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.uiSetError:
            return{
                ...state,
                msgError:action.payload
            }
        case types.uiRemoveError:
            return{
                ...state,
                msgError:null
            }
        case types.uiStartLoading:
            return{
                ...state,
                loading:action.payload
            }
        case types.uiFinishLoading:
            return{
                ...state,
                loading:action.payload
            }
        default:
            return state;
    }

}
