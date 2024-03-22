import React, { useEffect } from 'react'
import {BrowserRouter , Navigate, Route, Router, Routes} from 'react-router-dom'
import { LoginScreen } from '../auth/LoginScreen'

import { CalendarScreen } from '../calendar/CalendarScreen'
import { useDispatch } from 'react-redux'
import { startChecking } from '../actions/auth'

export const AppRouter = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startChecking());
    
  }, [dispatch])
  
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
