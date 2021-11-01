import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarList() {
    return (
        <div className="navbar-nav">
            <NavLink className="nav-link" aria-current="page" to="/" exact activeClassName="active">Home</NavLink>
            <NavLink className="nav-link" to="/products" exact activeClassName="active">Products</NavLink>
        </div>
    )
}

export default NavbarList
