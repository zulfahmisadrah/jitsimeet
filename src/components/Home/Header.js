import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar/Navbar'
import './Style.css'
import './Header.css'


function Header() {
    return (
        <>
        <Navbar/>
        <div className="main">
            <div className='main-hero'>
                <h1 className="hero-title"><span>Video Conference</span></h1>
                <p className='hero-sub-tilte'>Jitsi Meet</p>
                <Link to='/Signin' className='cv-btn' style={{ textDecoration: 'none' }}>Sign In</Link>
            </div>
        </div>
            {/* <div id='main'>
                <div className='name'>
                    <h1 className="main-title"><span>Video Conference</span></h1>
                    <p className='details'>Jitsi Meet</p>
                    <a href='/Signin' className='cv-btn' style={{ textDecoration: 'none' }}>Sign In</a>
                </div>
            </div> */}
        </>
    )
}

export default Header