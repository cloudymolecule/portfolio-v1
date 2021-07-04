import React, { Component } from 'react'
import '../../../styles/Skills.css'
import Skill from './Skill'
import { Ruby, Rails, HtmlCss, Sinatra, JS, ReactJS, Languages, Photography } from '../../../data/Skills'

class Skills extends Component {
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <>
                <div className='skills-container-container'>
                    <h2 className='skills-title'>.skills()</h2>
                    <div className='skills-container'>
                        <Skill skill={Ruby}/>
                        <Skill skill={Rails}/>
                        <Skill skill={HtmlCss}/>
                        <Skill skill={Sinatra}/>
                        <Skill skill={JS}/>
                        <Skill skill={ReactJS}/>
                        <Skill skill={Languages}/>
                        <Skill skill={Photography}/>
                    </div>
                </div>
            </>
        )
    }
}

export default Skills