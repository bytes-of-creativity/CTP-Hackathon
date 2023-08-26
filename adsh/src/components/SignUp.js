import React, { useState } from 'react';
import '../styles/SignUp.css';
import {NavBar, NavItems} from '../components/NavProfile'
import { PassWord} from './UserLogin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';//import used to add icons, need to install package
import { faPalette, faPlus, faRobot } from '@fortawesome/free-solid-svg-icons';//import used to add the eye icon, need to install package
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';



const SignUp = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        if (e.target.id === 'email') {
            setEmail(e.target.value);
        } else if (e.target.id === 'pw') {
            setPassword(e.target.value);
        }
    }

    const register = async () => {
        try{
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
        } catch (error) {
            console.log(error.message)
            // Remember to deal with message thats says password must e 6 characters 
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
                    <SignUpButton onClick={register}/>
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

export const SignUpButton = (props) => {
    return (
        <button id='submit-button' type='submit' onClick={props.onClick}> Sign Up </button>
    )
}

export default SignUp;