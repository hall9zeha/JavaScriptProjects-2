import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import validator from 'validator'
import { login, startLoginAsyncExample, startLoginWithEmailPassword, startLoginWithGoogle } from '../../actions/auth'
import { removeError, setError } from '../../actions/ui'

export const LoginScreen = () => {

  const dispatch = useDispatch()

  const {msgError, loading} = useSelector(state=>state.ui)

  const [formValues, handleInputChange ] = useForm({
    email:'martha@mail.com',
    password:'123456'
  })

  const {email,password} = formValues

  const handleEventLogin = (e) =>{
    e.preventDefault();
    if(handleValidateForm()){ 
      dispatch(startLoginWithEmailPassword(email,password))
    }
    
    // Ejemplo de acción asíncrona para probar que la configuración middleware en redux funciona correctamente
    // dispatch(startLoginAsyncExample(email,password));
  }
  const handleLoginWithGoogle =()=>{
    dispatch(startLoginWithGoogle());
  }

  const handleValidateForm = () =>{
    if(email.trim().length === 0 || !validator.isEmail(email) ){
      dispatch(setError("Email is not valid or is empty"))
      return false;
    }else if(password.trim().length ===0){
      dispatch(setError("Password required"))
      return false;
    }
    dispatch(removeError());
    return true;
  }

  return (
    <>
      <h3 className='auth__title'>Login</h3>
      <form onSubmit={handleEventLogin}>
         {/* Si el msgError no es nulo entonces mostrará un elemento div con el mesaje */}
          {
            msgError && (
              <div className='auth__alert-error'>{msgError}</div>
            )
          }
        <input
          type='text'
          placeholder='Email'
          name="email"
          autoComplete='off'
          className='auth__input'
          value={email}
          onChange={handleInputChange}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          className='auth__input'
          value={password}
          onChange={handleInputChange}
        />
        <button

          type='submit'
          className='btn btn-primary btn-block'
          disabled={loading}
        >
          Login
        </button>
    
        <div className='auth__social-networks'>
          <p>Login with social networks</p>
              <div  className="google-btn" 
                    onClick={handleLoginWithGoogle}
              >
                  <div className="google-icon-wrapper">
                      <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/archive/c/c1/20210618182605%21Google_%22G%22_logo.svg" alt="google button" />
                  </div>
                  <p className="btn-text">
                      <b>Sign in with google</b>
                  </p>
              </div>
        </div>
        <Link
          to="/auth/register"
          className="link"
        >
          Create new account
        </Link>   
      </form>
    </>
  )
}
