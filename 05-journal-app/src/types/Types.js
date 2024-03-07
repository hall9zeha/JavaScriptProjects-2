export const types={
    // [Reducer manage] queda a discreción el contenido de cada indicador o type, en este caso
    // simplemente se está colocando entre corchetes una referencia del reducer que se encargará de esa acción
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
    notesLogoutCleanig:'[Notes] Logout cleaning'

}