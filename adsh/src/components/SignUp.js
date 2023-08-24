import React, { useState } from 'react';
import '../styles/SignUp.css';
import {NavBar, NavItems} from '../components/NavProfile'
import { UserName, PassWord} from './UserLoginContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';//import used to add icons, need to install package
import { faPalette, faPlus, faRobot } from '@fortawesome/free-solid-svg-icons';//import used to add the eye icon, need to install package

const SignUp = (props) => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        if (e.target.id === 'username') {
            setUserName(e.target.value);
        } else if (e.target.id === 'pw') {
            setPassword(e.target.value);
        } else if (e.target.id === 'email') {
            setEmail(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    
    return (
        <div>
        <NavBar>
                <NavItems id='logo' icon={faRobot} className="fa-lg">
                </NavItems>
        </NavBar>
        <div className='login-container'>
            <FontAwesomeIcon className="icon" icon={faPalette} />
            <form onSubmit={handleSubmit}>
                <UserName value={username} onChange={handleChange}/>
                <Email value={email} onChange={handleChange}/>
                <PassWord value={password} onChange={handleChange}/>
                <div className='submit-bt'>
                    <SignUpButton/>
                </div>
                <button id="back-to-login" onClick={() => props.onFormSwitch('login')}> Have an account? Sign in Here</button>
            </form>
        </div>
        </div>
    )
}

export const Email = (props) => {
    return (
        <div className='email-container'>
            <input id="email" className="email-class" value={props.value} placeholder='EMAIL' required onChange={props.onChange}/>
        </div>
    )
}

export const SignUpButton = () => {
    return (
        <button id='submit-button' type='submit'> Sign Up </button>
    )
}

export default SignUp;