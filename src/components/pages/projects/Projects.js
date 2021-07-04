import React, { Component } from 'react'
import '../../../styles/Projects.css'
import Project from '../projects/Project'
import { TvShows, Shutterlogger, Firebook, Rentscape} from '../../../data/Projects'

class Projects extends Component {
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <div className='projects-container-container'>
                    <h2 className='projects-title'>.projects()</h2>
                    <div className='projects-container'>
                        <Project project={TvShows}/>
                        <Project project={Shutterlogger}/>
                        <Project project={Firebook}/>
                        <Project project={Rentscape}/>
                    </div>
            </div>
        )
    }
}

export default Projects
