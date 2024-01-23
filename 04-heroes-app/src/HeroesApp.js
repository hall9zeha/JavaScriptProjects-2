
import React, { useEffect, useReducer } from 'react'
import { AppRouter } from './routers/AppRouter'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import { json } from 'react-router-dom'

//Inicializará nuestro useReducer con estos valores 
const init=()=>{
  //Si el usuario se encuentra en el localStorage restornar como objeto, caso contrario logged = false
  return JSON.parse(localStorage.getItem('user')) || {logged:false}
}

export const HeroesApp = () => {

  const [user, dispatch] = useReducer(authReducer,{},init)
  //Escuchamos si hay algún cambio en el objeto usuario y no es nulo lo guardamos en localStorage 
  useEffect(()=>{
    if (!user) return;
    localStorage.setItem('user',JSON.stringify(user))
  },[user])

  return (
    //Envolvemos nuestras rutas con AuthContext para que 
    //todos sus hijos tengan acceso a los valores que vayamos a proveer
    <AuthContext.Provider value={{
        user,
        dispatch
    }}>
      <AppRouter/>

    </AuthContext.Provider> 
  )
}
