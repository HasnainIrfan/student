import React, { useState } from 'react';
import './BookCall.css';
import { UilQuestion } from '@iconscout/react-unicons'
import Animate from '../../Assets/animated.gif'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';

const BookCall = () => {

    const [selectDate, setSelectDate] = useState("");
    const [selectMentor, setSelectMentor] = useState(false);
   
   
  
    console.log(selectDate);


    return (
        <>
            <div className="bookcall-wrapper" id='book'>
                <div className="bookcall">
                    <div className="bookcall-l">
                        <h1>book a call with my mentor</h1>
                        <ul>
                            <div>
                                <li><div className="bookCricle"><UilQuestion /></div>Select your Mentor</li>
                                <li><div className="bookCricle"><UilQuestion /></div>Select date</li>
                                <li><div className="bookCricle"><UilQuestion /></div>Select available time slots </li>
                                <li><div className="bookCricle"><UilQuestion /></div>Type Reason for the call</li>
                                <li><div className="bookCricle"><UilQuestion /></div>Select Confirm Call</li>
                                <li></li>
                            </div>

                            <div className='animate'>
                                <img src={Animate} alt="" />
                            </div>
                        </ul>
                        <input type="time"  />

                    </div>
                    <div className="bookcall-r">
                        <h1>Form</h1>
                        <form action="">
                            <div className="inputbox bookinput">
                                <input type="text" required="required" />
                                <span>Username</span>
                                <i></i>
                            </div>
                            <div className="inputbox bookinput">
                                <select required="required" onChange={() => setSelectMentor(true)}>
                                    <option ></option>
                                    <option>Mentor1</option>
                                    <option>Mentor2</option>
                                    <option>Mentor3</option>
                                </select>
                                <span className='BookSpan'>Select Mentor</span>
                                <i></i>
                            </div>

                            <div className="inputbox bookinput DateSelect">
                                {
                                    selectMentor ? <DatePicker selected={selectDate} onChange={date => {
                                        setSelectDate(date);
                                    }}
                                        dateFormat='dd/MM/yyyy'
                                        minDate={new Date()}
                                        isClearable
                                        showYearDropdown
                                        scrollableMonthYearDropdown
                                    /> :
                                        <>
                                            <select required="required">
                                                <option ></option>
                                                <option >Select Mentor to see Date</option >
                                            </select>
                                            <span className='BookSpan'>Select Date</span>
                                            <i></i>
                                        </>

                                }
                            </div>

                          

                            <div className="inputbox bookinput">
                                {selectDate ?
                                    <select required="required">
                                        <option ></option>
                                        <option >9am / 10am</option >
                                        <option >3am / 10am</option >
                                        <option >4am / 10am</option >
                                        <option >5am / 10am</option >
                                        <option >7am / 10am</option >
                                    </select> :
                                    <select required="required">
                                        <option ></option>
                                        <option >No time available</option>
                                    </select>
                                }
                                <span className='BookSpan'>Select Time</span>
                                <i></i>
                            </div>



                            <div className="detailBox bookinput">
                                <textarea type="text" required="required"></textarea>
                                <span>Descpricion</span>
                                <i></i>
                            </div>


                            <button type='' className='animatebtn bookBtn'><span>Submit Request</span></button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BookCall