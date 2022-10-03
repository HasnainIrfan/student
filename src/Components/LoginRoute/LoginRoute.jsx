import React from 'react';
import './LoginRoute.css';
import { Link } from 'react-router-dom';

const LoginRoute = () => {
    return (
        <>
            <button className='btn LoginRoute'><Link to='/lr'>Login/Register</Link></button>

        </>
    )
}

export default LoginRoute