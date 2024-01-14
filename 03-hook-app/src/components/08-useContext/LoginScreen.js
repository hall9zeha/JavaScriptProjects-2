import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    const {user, setUser} = useContext(UserContext);

    const actionLogin = ()=>{
        const {id,name,email} = user;
        setUser({
            id,
            name,
            email,
            sigIn:true
        })
    }

  return (
    <div>
        <h1>LoginScreen</h1>
        <hr/>
        <button onClick={actionLogin} className='btn btn-primary '>Login</button>
    </div>
  )
}
