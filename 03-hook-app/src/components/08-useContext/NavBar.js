import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
        <nav className="navbar navbar-expand-sm  navbar-dark  bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">useContext</a>
              
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {/* NavLink nos permite usar algunas clases de bootstrap */}
                    <NavLink exact activeClassName="active" className="nav-link nav-item " to='/'>Home</NavLink>
                    <NavLink exact activeClassName="active" className="nav-link nav-item" to='/about'>About</NavLink>
                    <NavLink exact activeClassName="active" className="nav-link nav-item" to='/login'>Login</NavLink>
                 
                </div>
                </div>
            </div>
        </nav>
   
  )
}
