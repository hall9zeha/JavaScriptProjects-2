import React, {useContext } from "react"
import { AuthContext } from "../auth/authContext"
import { Navigate } from "react-router-dom";

//Muy importante el nombre del objeto a desescructurar es 'children' 
export const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
  return user.logged ? children : <Navigate to="/login"/>
}
