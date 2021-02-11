import React from 'react';
import './Right.css';
import Icons from '../../../Icons/Icons';
import { Link } from 'react-router-dom';

const Right = () => {
    return (
        <div className='right'>
            <Link to={'/'} style={{ position: 'absolute', right: '10px', top: '10px', textDecoration: 'none' }} href='#'>I'm New!</Link>
            <h1 style={{ margin: '0px', paddingLeft: '0px' }}>Sign in to Incense8</h1><br />
            <Icons val='Sign in with Google' />
            <p>Or with email</p>

            <form>
                <label style={{ fontWeight: '500' }}>Email Address:</label>
                <input className='email__focus' style={{ boxSizing: 'border-box', padding: '0px 10px', width: '100%', height: '40px', marginTop: '10px', backgroundColor: '#ccc', border: 'none', borderRadius: '4px' }} type='text' placeholder='Enter Your Registered Email' ></input>
                <br />
                <br />

                <div className='pass'>
                    <label style={{ fontWeight: '500' }}>Password:</label>
                    <a href='#'>Forgot Password?</a>
                </div>
                <input className='pass__focus' style={{ boxSizing: 'border-box', padding: '0px 10px', width: '100%', height: '40px', marginTop: '0px', backgroundColor: '#ccc', border: 'none', borderRadius: '4px' }} type='text' placeholder='Enter Your Password' ></input>

                <button className='btn__signin' style={{ marginTop: '15px', height: '15%', width: '30%', color: 'white', fontWeight: 'bold' }}>Sign in</button>

            </form>
        </div>
    )
}

export default Right
