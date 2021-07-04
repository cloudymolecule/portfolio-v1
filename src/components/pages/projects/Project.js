import React from 'react'
import '../../../assets/images/rentscape.png'
function Project(data) {
    
    return (
        <div className='project-container'>
            <div className='project-title'>
                <h2>{data.project.title}</h2>
            </div>
            <div className='project-description'>
                <p>{data.project.description}</p>
            </div>
            <div className='project-image-container'>
                <img className='project-image' src={require('../../../assets/images/' + data.project.image + '.png').default} alt={data.project.image}/>
            </div>
            <ul className='project-list'>
                {data.project.list.map(item => <li>{item}</li>)}
            </ul>
            <div className='project-github'>
                <a href={data.project.github} className='project-link' target="_blank" rel="noreferrer">Github</a>
            </div>
            <div className='project-demo'>
                <a href={data.project.demo} className='project-link' target="_blank" rel="noreferrer">Demo</a>
            </div>
        </div>
    )
}

export default Project
