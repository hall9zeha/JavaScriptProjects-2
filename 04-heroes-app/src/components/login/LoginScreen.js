import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { Types } from '../../types/Types';

export const LoginScreen = () => {
    const navigate = useNavigate();

    const {dispatch} = useContext(AuthContext);

    const handleLogin=()=>{
      const action = {
        type:Types.login,
        payload:{name:'Martha'}
      }
      dispatch(action);
      navigate('/marvel',{
          replace:true
      })
    }

  return (
    <div className='container mt-5'>
        <h1>Login</h1>
        <hr/>

        <button className='btn btn-primary ' onClick={handleLogin}>Login</button>
    </div>
  )
}
