import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo-v2.png'

function Navbar() {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => {
        setClick(false)
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <div className='navbar-container container'>
                        <Link onClick={closeMobileMenu} to='/' className='navbar-logo'>
                            <img src={logo} alt='Logo' className='navbar-icon'/>
                            <div className='navbar-name'>Dario Carlino</div>
                        </Link>
                        <div onClick={handleClick} className='menu-icon'>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link onClick={closeMobileMenu} className='nav-link' to='/'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link onClick={closeMobileMenu} className='nav-link' to='/bio'>Bio</Link>
                            </li>
                            <li className='nav-item'>
                                <Link onClick={closeMobileMenu} className='nav-link' to='/skills'>Skills</Link>
                            </li>
                            <li className='nav-item'>
                                <Link onClick={closeMobileMenu} className='nav-link' to='/projects'>Projects</Link>
                            </li>
                            <li className='nav-item'>
                                <Link onClick={closeMobileMenu} className='nav-link' to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
