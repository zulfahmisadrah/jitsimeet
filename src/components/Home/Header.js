import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar/Navbar'
import './Style.css'
import './Header.css'


function Header() {
    return (
        <>
        <Navbar/>
        <div className="main"></div>
        <div className='main-hero'>
<<<<<<< HEAD
                <h1 className="hero-title"><span>Hai, senang bertemu denganmu</span></h1>
                <p className='hero-sub-tilte'>Sistem ini memudahkan Anda dalam melakukan pembelajaran online melalui Video Conference.</p>
                <Link to='/Signin' className='cv-btn' style={{ textDecoration: 'none' }}>Mulai</Link>
=======
                <h1 className="hero-title"><span>Video Conference</span></h1>
                <p className='hero-sub-tilte'>Jitsi Meet memudahkan </p>
                <a className='cv-btn' href="#features" style={{ textDecoration: "none" }}>
                    Sign In
                </a>
>>>>>>> e0fbccf7699ac42f22a6ef3cbc298c7a35d1486c
            </div>
        </>
    )
}

export default Header