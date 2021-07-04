import React from 'react'

function Skill(data) {
    return (
        <div className='skill-container'>
            <div className='skill-title'>
                <h2>{data.skill.title}</h2>
            </div>
            <div className='skill-desc'>
                <p>{data.skill.description}</p>
            </div>
            <ul className='skill-list'>
                {data.skill.list.map(item => <li>{item}</li>)}
            </ul>
        </div>
    )
}

export default Skill
