import React from "react"
import './Navbar.css'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar-container">
        <Link className="Link" to='/'><div>Counter App</div></Link>

        <div className="navbar-menu-container">
          <Link className="Link"  to = '/about'><div className="navbar-menu-item">ABOUT</div></Link>
          <Link className="Link"  to='/contact'><div className="navbar-menu-item">CONTACT</div></Link>
        </div>
    </div>
  )
}

export default Navbar