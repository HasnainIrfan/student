import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll'
import LoginRoute from '../LoginRoute/LoginRoute';
import Logo from '../../Assets/logo.png';

const Navbar = () => {
    const [Navbar, setNavbar] = useState(false);

    const ChangeNav = () => {
        if (window.scrollY >= 50) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', ChangeNav)
    return (
        <div className="navbar-wrapper">
            <div className="navbar-top-wrapper">
                <div className="navbar-top">
                    <p>
                        If you have any questions or want to know more about our product, schedule a free call with us now!
                    </p>
                    <button className='btn'>Book A Discovery Call</button>
                </div>

                <div className={"navbar-bottom-wrapper " + (Navbar ? 'navbar-fixed' : '')}>
                    <div className="navbar-bottom">
                        <div className="navbar-logo">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="navbar-menu">
                            <ul>
                                <Link to='home' smooth={true} span={true}><li>Home</li></Link>
                                <Link to='work' smooth={true} span={true}><li>How it Work</li></Link>
                                <Link to='mentor' smooth={true} span={true}><li>Mentors</li></Link>
                                <Link to='book' smooth={true} span={true}><li>Book Class</li></Link>
                                <Link to='about' smooth={true} span={true}><li>About Us</li></Link>
                                <Link to='contact' smooth={true} span={true}><li>Contact Us</li></Link>
                            </ul>
                            <LoginRoute />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

// 3:36