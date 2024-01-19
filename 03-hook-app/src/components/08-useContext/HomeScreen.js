import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {
    //Buscará la instancia de UserContext en el árbol de componentes
    //ya que necesitamos acceder lo que hayamos compartido a través de ella
    const {user} = useContext(UserContext)
    console.log(user);
  return (
    <div>
        <h1>HomeScreen</h1>
        <pre>
          {JSON.stringify(user,null,3)}
        </pre>
        <hr/>
    </div>
  )
}
