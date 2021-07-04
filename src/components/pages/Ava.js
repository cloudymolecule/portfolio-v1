import React from 'react'
import AvaPic from '../../assets/images/ava.jpg'
import '../../styles/Ava.css'

function Ava() {
    return (
        <div className='ava-container'>
            <h1 className='ava-title'>Sweet little Ava, my little coding partner</h1>
            <img className='ava-image' src={AvaPic} alt='My little friend, Ava'/>
        </div>
    )
}

export default Ava
