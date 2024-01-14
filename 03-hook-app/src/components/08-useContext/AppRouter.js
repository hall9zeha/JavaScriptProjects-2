import React from 'react'
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import { AboutScreen } from './AboutScreen'
import { HomeScreen } from './HomeScreen'
import { LoginScreen } from './LoginScreen'
import { NavBar } from './NavBar'

export const AppRouter = () => {
  return (
    <Router>
        <div>
            <NavBar/>
            {/* El Routes de react-router es como un switch tradicional(Switch en react-router-dom está descontinuado), dependiendo de qué condición ejecutará tal o cual
            En este caso una dirección a un componente dentro de la ruta */}
            <Routes>
            {/* exact le dice a la ruta que debe buscar el path con todos sus caracteres y no por la primera coincidencia */}
                <Route exact path='/' Component={HomeScreen}/> 
                <Route exact path='/login' Component={LoginScreen}/>
                <Route exact path='/about' Component={AboutScreen}/>
                {/* Ponemos una ruta por defecto si no existiera ninguna de las anteriores */}
                <Route path='*' Component={HomeScreen}/> 
            </Routes>
        </div>
    </Router>
  )
}
