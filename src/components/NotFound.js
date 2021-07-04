import React from 'react'
import '../styles/NotFound.css'
import { Link } from 'react-router-dom'
import PretzelNugget from '../assets/images/pretzelNugget.jpg'


function NotFound() {
    return (
        <div className='not-found-container'>
            <h1 className='not-found-text'>Nothing here but this delicious peanut butter pretzel</h1>
            <img className='not-found-pretzel' src={PretzelNugget} alt='Delicious Pretzel' />
            <br />
            <Link to='/' className='not-found-home'>Return Home</Link>
        </div>
    )
}

export default NotFound
