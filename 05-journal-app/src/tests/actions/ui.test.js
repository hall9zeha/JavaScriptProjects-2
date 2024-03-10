import { removeError, setError, uiFinishLoading, uiStartLoading } from "../../actions/ui"
import { types } from "../../types/Types";

describe('Test in ui actions', () => { 
    test('All actions should work', () => { 

        const actionError = setError("Error");
        expect(actionError).toEqual({
            type:types.uiSetError,
            payload:'Error'
        })

        const removeErrorAction = removeError()
        const startLoadingAction =  uiStartLoading()
        const finishLoadingAction = uiFinishLoading()

        expect(removeErrorAction).toEqual({
            type:types.uiRemoveError
        })
        expect(startLoadingAction).toEqual({
            type:types.uiStartLoading,
            payload:true
        })
        expect(finishLoadingAction).toEqual({
            type:types.uiFinishLoading,
            payload:false
        })



     })
 })