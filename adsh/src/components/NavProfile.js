import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';//import used to add icons, need to install package
import { faUser, faPlus, faRobot } from '@fortawesome/free-solid-svg-icons';//import used to add the eye icon, need to install package
import '../styles/NavProfile.css';

const NavProfile = () => {
    return (
        <div>
            <NavBar>
                <NavItems id='logo' icon={faRobot} className="fa-lg">
                </NavItems>
                <div className='right-nav-items'>
                    <NavItems id='right-logo1' icon={faPlus} className="fa-6x">
                        <DropDown>
                            <DropDownItem link="#">Post/Submit</DropDownItem>
                        </DropDown>
                    </NavItems>
                    <NavItems id='right-logo2' icon={faUser} className="fa-2x">
                        <DropDown>
                            <DropDownItem link="#"> My Profile</DropDownItem>
                            <DropDownItem link="#">Setting</DropDownItem>
                            <DropDownItem link="#">Log Out</DropDownItem>
                        </DropDown>
                    </NavItems>
                </div>
            </NavBar>
        </div>
    );
}

const NavBar = (props) => {
    return (
        <nav className='navbar'>
            <div className='navbar-item-container'> {props.children}</div>
        </nav>
    )
}

const NavItems = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <li className='nav-item'>
            <a href={props.link} className='icon-button' onClick={() => setOpen(!open)} >
                <FontAwesomeIcon icon={props.icon} />
            </a>
            {open && props.children}
        </li>
    )
}

const DropDown = (props) => {
    return (
        <div className='dropdown'>
            {props.children}
        </div>
    )
}

const DropDownItem = (props) => {
    return (
        <a href={props.link} className='dropdown-item'>
            {props.children}
        </a>
    )
}

export default NavProfile 