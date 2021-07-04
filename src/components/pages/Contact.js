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
                        <a className='contact-item' href='https://www.linkedin.com/in/dariocarlino/' target="_blank" rel="noreferrer">
                            <AiFillLinkedin />
                        </a>
                        <a className='contact-item' href='mailto: dariocarlino908@gmail.com' target="_blank" rel="noreferrer">
                            <MdEmail />
                        </a>
                        <a className='contact-item' href='https://github.com/cloudymolecule' target="_blank" rel="noreferrer">
                            <AiFillGithub />
                        </a>
                        <a className='contact-item' href='https://twitter.com/darioacarlino' target="_blank" rel="noreferrer">
                            <AiFillTwitterCircle />
                        </a>
                        <a className='contact-item' href='https://dariocarlino908.medium.com/' target="_blank" rel="noreferrer">
                            <AiFillMediumCircle />
                        </a>
                        <a className='contact-item' href='https://www.instagram.com/darioacarlino/' target="_blank" rel="noreferrer">
                            <AiFillInstagram />
                        </a>
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


