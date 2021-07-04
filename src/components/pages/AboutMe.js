import React, { Component } from 'react'
import '../../styles/AboutMe.css'

class AboutMe extends Component {
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <div className='about-text-container'>
                    <h2 className='about-title'>.about(me)</h2>
                    <p className='about-text'>
                    Based in Eastern Pennsylvania, I'm Originally from the land of Gauchos and Tango, Argentina.
    I've recently graduated from Flatiron's School Software Engineering program, and I've been a hair stylist and master barber for the past 12 years. Always seeking perfection in the craft, I add a personal touch to every service I perform. Such background gives me unique skills when it comes to teamwork and client relations, and that mindset applies to web development as well.
    I enjoy tackling complex problems, turning them into elegant and efficient web applications.
    In my free time you might find me exploring the woods with my camera in tow,  or reading a good science fiction book.
                    </p>
                </div>
            </>
        )
    }
}

export default AboutMe