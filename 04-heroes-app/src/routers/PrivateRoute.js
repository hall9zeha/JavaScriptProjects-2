import React, {useContext } from "react"
import { AuthContext } from "../auth/authContext"
import { Navigate, useLocation } from "react-router-dom";

//Muy importante el nombre del objeto a desescructurar es 'children' 
export const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user} = useContext(AuthContext);
    const {pathname, search} = location;

    //Guardamos la última dirección visitada para retornar a ella cuando se haga login
    localStorage.setItem('lastPath', pathname + search);

  return user.logged ? children : <Navigate to="/login"/>
}
