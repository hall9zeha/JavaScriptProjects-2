import React, { useEffect } from 'react'
import {BrowserRouter , Navigate, Route, Router, Routes} from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { CalendarScreen } from '../components/calendar/CalendarScreen'

import { useDispatch, useSelector } from 'react-redux'
import { startChecking } from '../actions/auth'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'

export const AppRouter = () => {
  
  
  const dispatch = useDispatch();
  const {checking,uid} = useSelector(state=>state.auth);

  useEffect(() => {
    dispatch(startChecking());
    
  }, [dispatch])

  if(checking){
    return (<h5>Prease wait...</h5>)
  }
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/login'
            element={
              //!!uid convertirá esa variable de cadena en un boleano si existe devolverá true
              <PublicRoute isAuthenticated={!!uid}>
                <LoginScreen/>
              </PublicRoute>
            }
            />
            
            <Route path='/'
              element={
                <PrivateRoute isAuthenticated={!!uid} >
                  <CalendarScreen/>
                </PrivateRoute>
              }
            />

          
            <Route 
                path='*' element={<Navigate to = "/"/>}
            />
            </Routes>
    </BrowserRouter>
  )
}
