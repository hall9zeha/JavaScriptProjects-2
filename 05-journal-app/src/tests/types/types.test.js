import { types } from "../../types/Types"

describe('Test in types object', () => { 

    test('should be equals', () => { 

        expect(types).toEqual({
            login:'[Auth] Login',
            logout:'[Auth] Logout',
        
            uiSetError:'[UI] Set error',
            uiRemoveError:'[UI] Remove error',
        
            // Loading types
            uiStartLoading:'[UI] Start loading',
            uiFinishLoading: '[UI] Finish loading',
        
            // Notes
            notesAddNew:'[Notes] New note',
            notesActive:'[Notes] Set active note',
            notesLoad:'[Notes] Load notes',
            notesUpdated:'[Notes] Update note',
            notesFileUrl:'[Notes] Updated image url',
            notesDelete:'[Notes] Delete note',
            notesLogoutCleaning:'[Notes] Logout cleaning',
            notesListed:'[Notes] Add to list',
        })
     })
 })