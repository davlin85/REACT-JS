import React from 'react'
import NavbarList from './NavbarList'
import logo from '../../img/logo.png'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient shadow-lg sticky-top">
            <div className="container">
            <div className="me-3"><img src={logo} className="logo" style={{width: 1.6 + 'rem', height: 1.6 +'rem'}} alt ="" /></div>
                <span className="navbar-brand me-5">React App</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <NavbarList />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;