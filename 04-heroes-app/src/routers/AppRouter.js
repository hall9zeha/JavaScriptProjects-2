
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LoginScreen } from '../components/login/LoginScreen'

import { DashboardRoutes } from './DashboardRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        {/* Mostraremos la pantalla de login pero sin el navbar */}
        <Routes>
            <Route path='/login' element={
              <PublicRoute>
                <LoginScreen/>
              </PublicRoute>
            }/>
            {/* <Route path='/login' element={<LoginScreen/>}/> */}
            {/*         
            //El componente PrivateRoute comprobará si debe mostrar el  
            //componente DashboardRoutes
            //Al hacerlo de la siguiente manera el componente hijo que es DashboardRoutes
            //pasa como una property a  PrivateRoute */}
            <Route path='/*' element={
              <PrivateRoute>
                <DashboardRoutes/>
              </PrivateRoute>
            }/>
            {/* <Route path='/*' element={<DashboardRoutes/>}/> */}
        </Routes>
    </BrowserRouter>
  )
}
