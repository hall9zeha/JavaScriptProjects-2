import { types } from "../types/Types";

export const setError =  (error) =>({
    type:types.uiSetError,
    payload:error
});

export const removeError = () =>({
    type:types.uiRemoveError
})

export const uiStartLoading =()=>({
    type:types.uiStartLoading,
    payload:true
})
export const uiFinishLoading = ()=>({
    type:types.uifinishLoading,
    payload:false
})