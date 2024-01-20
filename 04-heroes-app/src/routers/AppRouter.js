
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LoginScreen } from '../components/login/LoginScreen'

import { DashboardRoutes } from './DashboardRoutes'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        {/* Mostraremos la pantalla de login pero sin el navbar */}
        <Routes>
            <Route path='/login' element={<LoginScreen/>}/>
            <Route path='/*' element={<DashboardRoutes/>}/>
        </Routes>
    </BrowserRouter>
  )
}
