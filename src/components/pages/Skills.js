import React from 'react'
import '../../styles/Skills.css'

function Skills(data) {
    return (
        <div className='skill-container'>
            <div className='skill-title'>
                <h2>{data.skill.title}</h2>
            </div>
            <div className='skill-desc'>
                <p>{data.skill.description}</p>
            </div>
        </div>
    )
}

export default Skills