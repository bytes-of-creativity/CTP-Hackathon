import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';//import used to add icons, need to install package
import { faUser, faPlus, faRobot } from '@fortawesome/free-solid-svg-icons';//import used to add the eye icon, need to install package
import '../styles/NavProfile.css';
import { Link, Routes, Route } from "react-router-dom"

const NavProfile = () => {
    return (
        <div>
            <NavBar>
                <NavItems id='logo' icon={faRobot} className="fa-lg">
                </NavItems>
                <div className='right-nav-items'>
                    <NavItems id='right-logo1' icon={faPlus} className="fa-6x">
                        <div class='dropdown'>
                        <ul>
                            <DropDownItem value="/create-post" link="#">Post/Submit</DropDownItem>
                        </ul>
                        </div>
                    </NavItems>
                    <NavItems id='right-logo2' icon={faUser} className="fa-2x">
                        <div class='dropdown'>
                            <ul>
                                <DropDownItem link="#"> My Profile</DropDownItem>
                                <DropDownItem link="#">Setting</DropDownItem>
                                <DropDownItem value="/login" link="#">Log Out</DropDownItem>
                            </ul>
                        </div>
                    </NavItems>
                </div>
            </NavBar>
        </div>
    );
}

export const NavBar = (props) => {
    return (
        <nav className='navbar'>
            <div className='navbar-item-container'> {props.children}</div>
        </nav>
    )
}

export const NavItems = (props) => {
    const [open, setOpen] = useState(false);
    
    return (
        <li className='nav-item'>
            <a href={props.link} className='icon-button' onClick={(e) =>{ e.preventDefault(); setOpen(!open);}}>
                <FontAwesomeIcon icon={props.icon} />
            </a>
            {open && props.children}
        </li>
    )
}

export const DropDown = (props) => {
    return (
        <div className='dropdown'>
            {props.children}
        </div>
    )
}

export const DropDownItem = (props) => {
    return (
        <Link to={props.value} href={props.link} className='dropdown-item'>
            {props.children}
        </Link>
    )
}

export default NavProfile 