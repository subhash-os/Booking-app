import React from 'react'
import "./Navbar.css"
const navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <div className="navContainer">
            <span className="logo"> booking</span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default navbar
