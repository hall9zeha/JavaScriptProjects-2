import React, { useContext } from 'react';
import { Link, NavLink , useNavigate} from 'react-router-dom';

import { AuthContext } from '../../auth/authContext';
import { Types } from '../../types/Types';


export const Navbar = () => {
    //Obtnemos los valores compartidos del authContext 
    const {user,dispatch} = useContext(AuthContext);
    const {logged,name} = user;

    const navigate = useNavigate();
    const handleLogout=()=>{
        //Enviamos la acción de cerrar sesión a nuestro authReducer compartido 
        //en todos los elementos hijos de la aplicación con AuthContext.Provider
        dispatch({type:Types.logout});
        navigate('/login',{
            replace:true
        })
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Heroes App
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>{name}</span>
                    <button 
                        className="nav-item nav-link btn" 
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
