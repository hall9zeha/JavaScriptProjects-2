import React from 'react'
import {BrowserRouter , Navigate, Route, Router, Routes} from 'react-router-dom'
import { LoginScreen } from '../auth/LoginScreen'

import { CalendarScreen } from '../calendar/CalendarScreen'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
             <Route 
                Component={LoginScreen}
                exact path='/login'/>
            <Route
                Component={CalendarScreen}
                exact path='/calendar'/>
            <Route 
                path='*' element={<Navigate to = "/calendar"/>}
            />
           </Routes>
    </BrowserRouter>
  )
}
