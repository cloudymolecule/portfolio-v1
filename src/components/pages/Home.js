import React from 'react'
import '../../styles/Home.css'
import Bio from './Bio'
import Contact from './Contact'
import Projects from './Projects'
import Skills from './Skills'

function Home() {
    return (
        <>
            <div className='home-text-name'>
                <span>Hello, I'm <span className='home-name'>Dario Carlino</span>.</span><br/>
                <span>I'm a full-stack web developer.</span><br />
            </div>
            <div className='home-text-desc'>
                <span>Turning dreams into reality.</span>
            </div>
            
            <div>
                <Bio />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </>
    )
}

export default Home
