import React, { Component } from 'react'
import '../../styles/Contact.css'
import { AiFillInstagram, AiFillLinkedin, AiFillGithub, AiFillMediumCircle, AiFillTwitterCircle } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { IconContext } from 'react-icons/lib'

class Contact extends Component {
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <>
                <IconContext.Provider value={{ color: '#ffd500', size: '80px' }}>
                    <AiFillLinkedin />
                    <MdEmail />
                    <AiFillGithub />
                    <AiFillTwitterCircle />
                    <AiFillMediumCircle />
                    <AiFillInstagram />
                </IconContext.Provider>
            </>
        )
    }
}

export default Contact

// FaInstagram
// FaLinkedin 
// FaGithub
// email 
// blog 
// twitter 


