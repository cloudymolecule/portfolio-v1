import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link className='nav-link' to='/'>Home</Link>
                    <Link className='nav-link' to='/bio'>Bio</Link>
                    <Link className='nav-link' to='/skills'>Skills</Link>
                    <Link className='nav-link' to='/projects'>Projects</Link>
                    <Link className='nav-link' to='/contact'>Contact</Link>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
