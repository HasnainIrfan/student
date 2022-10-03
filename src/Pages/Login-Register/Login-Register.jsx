import React, { useState } from 'react';
import './Login-Register.css';

const LoginRegister = () => {

    const [from, setfrom] = useState(false);

    // Login Values 
    const [login , setLogin] = useState({
        email:'',
        password:'',
    })

    const LoginInput = e =>{
        setLogin({
            ...login,
            [e.target.name]: e.target.value,
        })
    }

    const LoginSubmit = e =>{
        e.preventDefault();
        console.log(login);

    }

    // Register Values
    const [Register , setRegister] = useState({
        name:'',
        email:'',
        password:'',
        confrimpassword:'',
    })

    const RegisterInput = e =>{
        setRegister({
            ...Register,
            [e.target.name]: e.target.value,
        })
    }

    const RegisterSubmit = e =>{
        e.preventDefault();
        console.log(Register);

    }

    return (
        <>

            <div className={"loginRegister-wrapper " + (from ? 'loginRegister-wrapperRed' : '')}>

                <div className="square square1"></div>
                <div className="square square2"></div>
                <div className="square square3"></div>
                <div className="square square4"></div>
                <div className="square square5"></div>

                <div className="loginRegister-container">
                    <div className="loginRegister-Box">
                        <div className="box signIn">
                            <h2>Already Have an Account ?</h2>
                            <button className='signInbtn' onClick={() => setfrom(!from)}>Sign in</button>
                        </div>

                        <div className="box signUp">
                            <h2>Don't Have an Account ?</h2>
                            <button className='signUnbtn' onClick={() => setfrom(!from)}>Sign Up</button>
                        </div>
                    </div>
                    <div className={"fromBx " + (from ? 'fromActive' : '')} >
                        <div className="form signinFrom">
                            <h3>Sign In</h3>
                            <form onSubmit={LoginSubmit}>
                                <div className="inputbox">
                                    <input type="name" required="required" name='email' value={login.email} onChange={LoginInput}/>
                                    <span>Email</span>
                                    <i></i>
                                </div>
                                <div className="inputbox">
                                    <input type="Password" required="required" name='password' value={login.password} onChange={LoginInput}/>
                                    <span>Password</span>
                                    <i></i>
                                </div>
                                <button className='animatebtn loginbtn' type='submit'><span>Login</span></button>
                                <a href='/'> Forget Password</a>
                            </form>
                        </div>

                        <div className="form signUpFrom">
                            <h3>Sign Up</h3>
                            <form onSubmit={RegisterSubmit}>
                                <div className="inputbox">
                                    <input type="text" required="required" name='name' value={Register.name} onChange={RegisterInput}/>
                                    <span>User Name</span>
                                    <i></i>
                                </div>
                                <div className="inputbox">
                                    <input type="name" required="required" name='email' value={Register.email} onChange={RegisterInput}/>
                                    <span>Email Address</span>
                                    <i></i>
                                </div>
                                <div className="inputbox">
                                    <input type="Password" required="required" name='password' value={Register.password} onChange={RegisterInput}/>
                                    <span>Password</span>
                                    <i></i>
                                </div>
                                <div className="inputbox">
                                    <input type="text" required="required" name='confrimpassword' value={Register.confrimpassword} onChange={RegisterInput}/>
                                    <span>Confrim Password</span>
                                    <i></i>
                                </div>
                                <button className='animatebtn Registerbtn' type='Submit'><span>Register</span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default LoginRegister