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
            <div className='contact-container'>
                <IconContext.Provider value={{ color: '#ffd500', size: '80px' }}>
                    <h2 className='contact-title'>.contact(me)</h2>
                    <div className='contact-icons'>
                        <AiFillLinkedin className='contact-item'/>
                        <MdEmail className='contact-item'/>
                        <AiFillGithub className='contact-item'/>
                        <AiFillTwitterCircle className='contact-item'/>
                        <AiFillMediumCircle className='contact-item'/>
                        <AiFillInstagram className='contact-item'/>
                    </div>
                </IconContext.Provider>
            </div>
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


