import React, { useState } from "react";
import UserLogin from '../components/UserLogin';
import SignUp from '../components/SignUp';


const LogIn = () => {
    const [currentForm, setCurrentForm] = useState('login');
    const toggleForm =( formName ) => {
        setCurrentForm(formName)
    }

    return (
        <div className="login-page">
            {
            currentForm === "login" ? <UserLogin onFormSwitch={toggleForm}/> : <SignUp onFormSwitch={toggleForm}/>
            }
        </div>
    )
}


export default LogIn;