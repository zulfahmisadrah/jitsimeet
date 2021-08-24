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
                <h1 className="hero-title"><span>Hai, senang bertemu denganmu</span></h1>
                <p className='hero-sub-tilte'>Sistem ini memudahkan Anda dalam melakukan pembelajaran online melalui Video Conference.</p>
                <Link to='/Signin' className='cv-btn' style={{ textDecoration: 'none' }}>Mulai</Link>
            </div>
        </>
    )
}

export default Header