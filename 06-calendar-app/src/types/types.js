export const types = {
    //ui states
    uiOpenModal:'[ui] Open modal',
    uiCloseModal:'[ui] Close modal',

    //event states
    eventSetActive:'[Event] Set active',
    eventLogout:'[Event] Event logout',

    eventStartAddNew:'[Event] Start add new',
    eventAddNew:'[Event] Add new',
    eventClearActiveEvent:'[Event] Clear active event',
    eventUpdated:'[Event] Event update',
    eventDeleted:'[Event] Event deleted',
    eventLoaded:'[Event] Events loaded',

    //auth states
    authChecking: '[auth] Checking login state',
    authCheckingFinish:'[auth] Finish checking login state',
    authStartLogin:'[auth] start login',
    authLogin:'[auth] Login',
    authStartRegister:'[auth] Start register',
    authStartTokenRenew:'[auth] Start token renew',
    authLogout:'[auth] Logout'
}