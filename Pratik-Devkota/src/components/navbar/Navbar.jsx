import React from 'react'
import "./Navabar.css";
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" />
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className='nav-connect'>Connect With Me</div>
      
    </div>
  )
}

export default Navbar
