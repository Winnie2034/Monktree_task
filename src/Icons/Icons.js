import React from 'react';
import './Icons.css';
import googlelg from './icons8-google-20.png'

const Icons = (props) => {
    return (
        <div className='btn'>
            <button className='btn__G'><img src={googlelg} alt='gicon' />{props.val}</button>
            <button className='btn__fb'><img src="https://img.icons8.com/material-sharp/24/ffffff/facebook-f.png"/> </button>
            <button className='btn__tw'><img src="https://img.icons8.com/small/22/ffffff/twitter.png" alt='ticon' /></button>

        </div>
    )
}

export default Icons
