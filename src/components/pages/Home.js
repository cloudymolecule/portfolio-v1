import React from 'react'
import '../../styles/Home.css'
import portrait from '../../assets/images/portrait.jpg'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Projects from './Projects'
import Skills from './skills/Skills'

function Home() {
    return (
        <>
            <div className='home-container'>
                <div className='home-text-name'>
                    <span>Hello, I'm <span className='home-name'><b>Dario Carlino</b></span>.</span><br/>
                    <span>I'm a full-stack web developer.</span><br />
                    
                </div>
                <div className='home-text-desc'>
                    <span>Get ready to turn your dreams into reality.</span>
                    
                </div>
                <div className='home-portrait-container'>
                    <img className='home-portrait' src={portrait} alt='Dario Carlino'/>
                </div>
            </div>
            <div>
                <AboutMe />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </>
    )
}

export default Home
