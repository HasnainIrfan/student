import React from 'react';
import './Footer.css';
import { Link } from 'react-scroll';
import { UilMapMarker } from '@iconscout/react-unicons';
import { UilPhone } from '@iconscout/react-unicons';
import { UilEnvelope } from '@iconscout/react-unicons';
import Vip from '../../Assets/vip.gif';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="waves">
                    <div className="wave" id='wave1'></div>
                    <div className="wave" id='wave2'></div>
                    <div className="wave" id='wave3'></div>
                    <div className="wave" id='wave4'></div>
                </div>
                <div className="footer-wrapper">
                    <div className="footer-item">
                        <div className="footer-logo">
                            <span><UilEnvelope size={31} /></span>
                            <span><UilMapMarker size={31} /></span>
                            <span><UilPhone size={31} /></span>
                        </div>

                        <ul>
                            <Link to='home' smooth={true} span={true}><li>Home</li></Link>
                            <Link to='work' smooth={true} span={true}><li>How it Work</li></Link>
                            <Link to='mentor' smooth={true} span={true}><li>Mentors</li></Link>
                            <Link to='book' smooth={true} span={true}><li>Book Class</li></Link>
                            <Link to='about' smooth={true} span={true}><li>About Us</li></Link>
                            <Link to='contact' smooth={true} span={true}><li>Contact Us</li></Link>
                        </ul>
                    </div>
                    <div className="footer-copy">
                        <p>@2022 Hasnain Irfan | All Right Reserved</p>
                        <img src={Vip} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer