import React from "react"

import {Navigate, Route} from 'react-router-dom'
import PropTypes from 'prop-types'


export const PrivateRoute = ({children,isAuthenticated}) => {

  return isAuthenticated ? <>{children}</>  : <Navigate to="/login"/>
}
