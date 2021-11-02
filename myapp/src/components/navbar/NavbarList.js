import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarList() {
    return (
        <div className="navbar-nav">
            <NavLink className="nav-link me-2" aria-current="page" to="/" exact activeClassName="active">Home</NavLink>
            <NavLink className="nav-link me-2" to="/customers" exact activeClassName="active">Customers</NavLink>
        </div>
    )
}

export default NavbarList
