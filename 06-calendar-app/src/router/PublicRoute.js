import React from "react"

import {Navigate, Route} from 'react-router-dom'
import PropTypes from 'prop-types'


export const PublicRoute = ({children,isAuthenticated}) => {

  return isAuthenticated ?  <Navigate to="/"/> :<>{children}</> 
}

