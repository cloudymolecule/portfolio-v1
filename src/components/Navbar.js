import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/bio'>Bio</Link>
            <Link to='/skills'>Skills</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}

export default Navbar
