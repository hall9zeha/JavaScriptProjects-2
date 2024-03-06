import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { login, startLoginAsyncExample, startLoginWithGoogle } from '../../actions/auth'

export const LoginScreen = () => {

  const dispatch = useDispatch()


  const [formValues, handleInputChange ] = useForm({
    email:'martha@gmail.com',
    password:12345678
  })

  const {email,password} = formValues

  const handleEventLogin = (e) =>{
    e.preventDefault();
    dispatch(login(123456,'Martha'))
    
    // Ejemplo de acción asíncrona para probar que la configuración middleware en redux funciona correctamente
    // dispatch(startLoginAsyncExample(email,password));
  }
  const handleLoginWithGoogle =()=>{
    dispatch(startLoginWithGoogle());
  }
  return (
    <>
      <h3 className='auth__title'>Login</h3>
      <form onSubmit={handleEventLogin}>
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
