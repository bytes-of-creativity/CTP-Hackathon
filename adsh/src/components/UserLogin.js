import React, { useState } from 'react';
import '../styles/UserLogin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';//import used to add icons, need to install package
import { faPalette, faRobot } from '@fortawesome/free-solid-svg-icons';//import used to add the eye icon, need to install package
import {NavBar, NavItems} from './NavProfile'
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {Email} from './SignUp'

const UserLogin = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        if (e.target.id === 'email') {
            setEmail(e.target.value);
        } else if (e.target.id === 'pw') {
            setPassword(e.target.value);
        }
    }
    const login = async () => {
        try{
            //for now I will treat username as an email
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
        } catch (error) {
            console.log(error.message);
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
                <Email value={email} onChange={handleChange}/>
                <PassWord value={password} onChange={handleChange}/>
                <div className='submit-bt'>
                    <SubmitButton onClick={login}/>
                </div>
            </form>
            <div className='signup-container'>
                <SignUp onFormSwitch={props.onFormSwitch}/>
                <ForgotPw/>
            </div>
        </div>
        </div>
    )
}

export const PassWord = (props) => {
    return (
        <div className='password-container'>
            <input id="pw" className="pw-class" value={props.value} placeholder='PASSWORD' required onChange={props.onChange} type="password"></input>
        </div>
    )
}

export const SubmitButton = (props) => {
    return (
        <button id='submit-button' type='submit' onClick={props.onClick}> Log In </button>
    )
}

const SignUp = (props) => {
    return (
        <button className='signup' onClick={() => props.onFormSwitch('signup')}> Sign Up</button>
    )
}

const ForgotPw = () => {
    return (
        <button className='fgPassword'> Forgot Password?</button>
    )
}

export default UserLogin;

