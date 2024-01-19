import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    const {user, setUser} = useContext(UserContext);

  
        const {id,name,email} = user;
        setUser({
            id,
            name,
            email,
            sigIn:true
        })
  

  return (
    <div>
        <h1>LoginScreen</h1>
        <hr/>
        <button onClick={setUser} className='btn btn-primary '>Login</button>
    </div>
  )
}
