import React from 'react';
import './Right.css';
import Icons from '../../../Icons/Icons';
import { Link } from 'react-router-dom';

const Right = () => {
    return (
        <div className='right'>
            <Link to={'/signin'} style={{ position: 'absolute', right: '10px', top: '10px', textDecoration: 'none' }} href='#'>Let me Sign in!</Link>
            <h1 style={{ margin: '0px', paddingLeft: '0px' }}>Sign up to Incense8</h1><br />
            <Icons val='Sign up with Google' />
            <p>Or with email</p>

            <form style={{ boxSizing: 'border-box' }}>
                <label style={{ fontWeight: '500' }}>Full Name:</label>
                <input className='email__focus' style={{ boxSizing: 'border-box', padding: '0px 10px', width: '100%', height: '40px', marginTop: '10px', backgroundColor: '#ccc', border: 'none', borderRadius: '4px' }} type='text' placeholder='Enter Your Full Name' ></input>
                <br />
                <br />
                <label style={{ fontWeight: '500' }}>Email Address:</label>
                <input className='email__focus' style={{ boxSizing: 'border-box', padding: '0px 10px', width: '100%', height: '40px', marginTop: '10px', backgroundColor: '#ccc', border: 'none', borderRadius: '4px' }} type='text' placeholder='Enter Your Email Address' ></input>
                <br />
                <br />

                <div className='pass'>
                    <label style={{ fontWeight: '500' }}>Password:</label>
                </div>
                <input className='pass__focus' style={{ boxSizing: 'border-box', padding: '0px 10px', width: '100%', height: '40px', marginTop: '10px', backgroundColor: '#ccc', border: 'none', borderRadius: '4px' }} type='text' placeholder='Enter a strong Password' ></input>

                <label style={{ fontWeight: '500', fontSize: '12px', width: '100%' }}>
                    <p style={{ marginTop: '10px' }}><input type='checkbox' style={{display: 'inline-block'}}></input><span style={{marginLeft: '5px'}}></span>I agree to the Terms and Privacy Policy.</p>
                </label>

                <button className='btn__signin' style={{ marginTop: '8px', height: '12%', width: '45%', color: 'white', fontWeight: 'bold' }}>Create Account</button>

            </form>
        </div>
    )
}

export default Right
