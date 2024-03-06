import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { useDispatch } from 'react-redux'
import { removeError, setError } from '../../actions/ui'

export const RegisterScreen = () => {
  const dispatch = useDispatch()

  const [values, handleInputChange] = useForm({
    name:'Martha',
    email:'martha@mail.com',
    password:'123456',
    confirm:'123456'
  })
  const {name,email,password,confirm} = values
  const handleRegister=(e)=>{
    e.preventDefault();
    if(isFormValid()){
      console.log(name,email,password,confirm);
    }
    
  }
  const isFormValid = () =>{
    if(name.trim().length ===0){
      dispatch(setError("Name is required"))
      return false;
    } else if(!validator.isEmail(email)){
      dispatch(setError("Email is not valid"))
      return false;
    }else if(password !== confirm || password.length <5){
      dispatch(setError("Password should be at least of 6 characters and match each other"))
      return false;
    }
    dispatch(removeError())
    return true;

  }

  return (
    <>
    <h3 className='auth__title'>Register</h3>
    <form onSubmit={handleRegister}>
    <input
        type='text'
        placeholder='Name'
        name="name"
        autoComplete='off'
        className='auth__input'
        value={name}
        onChange={handleInputChange}
      />
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
       <input
        type='password'
        placeholder='Confirm password'
        name="confirm"
        autoComplete='off'
        className='auth__input'
        value={confirm}
        onChange={handleInputChange}
      />
      <button
        type='submit'
        className='btn btn-primary btn-block mb-5'
      >
        Register
      </button>
  
      <Link
        to="/auth/login"
        className="link"
      >
        Already registered?
      </Link>   
    </form>
  </>
  )
}
