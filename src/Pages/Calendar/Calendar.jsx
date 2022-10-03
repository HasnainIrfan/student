import React, { useEffect, useState } from 'react';
import './Calendar.css';
import Calendar from 'react-calendar';

const Calender = () => {
    const [date, setDate] = useState(new Date());

    const onChange = e => {
        setDate(e)
    }
    const Mentor =async () => {
       await fetch(`https://private-37dacc-cfcalendar.apiary-mock.com/mentors/1/agenda`)
            .then(res => res.json())
            .then(res2 => {
                console.log(res2);
            })
    }

    useEffect(() => {
        Mentor()

    }, [])

    return (
        <>
            <div className="calender-wrapper" id='book'>
                <div className="calendar">
                    <div className='calendar-l'>
                        <Calendar onChange={onChange} value={date}
                            dateFormat='dd/MM/yyyy'
                            minDate={new Date()} />
                        <h1>{date.toString()}</h1>
                    </div>
                    <div className='calendar-r'>
                        <input type="name" placeholder='UserName' />
                        <select>
                            <option ></option>
                            <option >9:00 - 10:00 Am</option>
                            <option >9:00 - 10:00 Am</option>
                            <option >9:00 - 10:00 Am</option>
                        </select>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Calender