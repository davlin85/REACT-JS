import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarList() {
    return (
        <div key="navbar-nav" className="navbar-nav">
            <NavLink className="nav-link me-2" to="/" exact activeClassName="active">Customers</NavLink>
            <NavLink className="nav-link me-2" to="/signup" exact activeClassName="active">Sign Up</NavLink>
        </div>
    )
}

export default NavbarList
