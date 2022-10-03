import React from 'react';
import './Contact.css';
import { UilMapMarker } from '@iconscout/react-unicons';
import { UilPhone } from '@iconscout/react-unicons';
import { UilEnvelope } from '@iconscout/react-unicons';


const Contact = () => {
    return (
        <>
            <div className="contact-wrapper" id='contact'>
                <div className="contact">
                    <div className="contact-l">
                        <div className="contact-box-l">
                            <h1>Contact Us</h1>
                            <div className="contact-mibiboxs">
                                <div className="contact-mibibox">
                                    <div className="contact-cricle">
                                        <UilMapMarker size={35} />
                                    </div>
                                    <h1>Location</h1>
                                    <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h6>
                                </div>

                                <div className="contact-mibibox">
                                    <div className="contact-cricle">
                                        <UilPhone size={35}/>
                                    </div>
                                    <h1>Phone</h1>
                                    <h6>+92-300-211392</h6>
                                </div>

                                <div className="contact-mibibox">
                                    <div className="contact-cricle">
                                        <UilEnvelope size={35} />
                                    </div>
                                    <h1>Message</h1>
                                    <h6>www.abcdefgh.com</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-r">
                        <div className="contact-box-r">
                            <h1>Form</h1>
                            <form action="">
                                <div className="inputbox">
                                    <input type="text" required="required" />
                                    <span>Name</span>
                                    <i></i>
                                </div>

                                <div className="inputbox">
                                    <input type="text" required="required" />
                                    <span>Email</span>
                                    <i></i>
                                </div>

                                <div className="detailBox">
                                    <textarea type="text" required="required"></textarea>
                                    <span>Descpricion</span>
                                    <i></i>
                                </div>
                                <button type='' className='animatebtn contactbtn'><span>Submit</span></button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact