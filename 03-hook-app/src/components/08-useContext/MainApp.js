import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {
    const userProvides = {
        id:123,
        name:"Martha",
        email:"martha@mail.com"
    }
  return (
    //Envolver nuestros componentes con UseProvider nos permitirá compartir 
    //elementos u objetos con sus componentes hijos 
    <UserContext.Provider value={userProvides}>
        <AppRouter/>
    </UserContext.Provider>
  )
}

