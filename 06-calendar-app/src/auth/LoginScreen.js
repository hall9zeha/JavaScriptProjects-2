import React from 'react';
import './login.css';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLogin, startRegister } from '../actions/auth';
import Swal from 'sweetalert2';

export const LoginScreen = () => {
    const dispatch = useDispatch();

    //For login
    const [formLoginValues, handleLoginInputchange] = useForm({
        lEmail:'barry@mail.com',
        lPassword:'123456'
    })

    const {lEmail, lPassword} = formLoginValues;

    //For register

    const [formRegisterValues, handleRegisterInputChange] = useForm({
        rName:'Lisa',
        rEmail:'lisa@mail.com',
        rPassword:'123456',
        rPassword2:'123456'
    })
    const {rName,rEmail,rPassword,rPassword2} = formRegisterValues;

    const handleLogin =(e)=>{
        e.preventDefault()
       
        dispatch(startLogin(lEmail,lPassword))
    }

    const handleRegister = (e)=>{
        e.preventDefault();
        if(rPassword !== rPassword2){
            Swal.fire('Error','Passwords must be the same');
        }
        dispatch(startRegister(rName,rEmail,rPassword))
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name='lEmail'
                                value={lEmail}
                                onChange={handleLoginInputchange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name='lPassword'
                                value={lPassword}
                                onChange={handleLoginInputchange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name='rName'
                                value={rName}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name='rEmail'
                                value={rEmail}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name='rPassword'
                                value={rPassword}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                name='rPassword2'
                                value={rPassword2}
                                onChange={handleRegisterInputChange} 
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}