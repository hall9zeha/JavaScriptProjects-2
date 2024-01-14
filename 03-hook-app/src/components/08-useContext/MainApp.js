import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {
    const userProvides = {
        id:123,
        name:"Martha",
        email:"martha@mail.com",
        sigIn:false
    }

    const [userState, setUserState] = useState(userProvides);

  return (
    //Envolver nuestros componentes con UseProvider nos permitirá compartir 
    //elementos u objetos con sus componentes hijos 

    //Ahora enviaremos un objeto que contenga las propiedades de nuestro useState
    <UserContext.Provider value={
        {user:userState,
         setUser:setUserState
        }}>
        <AppRouter/>
    </UserContext.Provider>
  )
}

