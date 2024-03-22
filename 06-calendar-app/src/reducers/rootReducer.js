
import { authReducer } from "./authReducer";
import { calendarReducer } from "./calendarReducer";
import { uiReducer } from "./uiReducers";

export const rootReducer = ({
    ui:uiReducer,
    calendar:calendarReducer,
    auth:authReducer
})