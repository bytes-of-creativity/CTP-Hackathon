import React from 'react';
import '../styles/ProfilePage.css';
import { NavBar, NavItems } from '../components/NavProfile'
import { faRobot } from '@fortawesome/free-solid-svg-icons';//import used to add the eye icon, need to install package

const ProfilePage = () => {
    const user = "Username";
    const profiledesc = "Description";
    const postsCount = 10;
    const followersCount = 10;
    const followingCount = 10;

    const userImagearray = ["land.jpg", "land.jpg", "land.jpg", "land.jpg", "land.jpg", "land.jpg", "land.jpg", "land.jpg",];
    return (
        <div className='profile-page-container' >
            <NavBar>
                <NavItems id='logo' icon={faRobot} className="fa-lg">
                </NavItems>
            </NavBar>
            <div className='pfp-top-container'>
                <div className='pfp-container'>
                    <ProfileImage link='land.jpg' />
                </div>
                <div className='user-info-container'>
                    <ProfileUser username={user}/>
                    <ProfileDescription profiletext={profiledesc} />
                    <StatusBar posts={postsCount} followers={followersCount} following={followingCount} />
                </div>
            </div>
            <div className='gallery scrollable'>
                <div className='gallery-image-item'>
                    {userImagearray.map((imageSrc, index) => (
                        <MyWork key={index} myworkimage={imageSrc} />
                    ))}
                </div>
            </div>

        </div>
    )
}

const ProfileUser = (props) => {
    return (
        <h4> {props.username} </h4>
    )
}

const ProfileImage = (props) => {
    return (
        <img className='profile-image-item' src={props.link} alt="Profile Picture"></img>
    )
}

const ProfileDescription = (props) => {
    return (
        <>
            {props.profiletext}
        </>
    )
}

const MyWork = (props) => {
    return (
        <>
            <img className="gallery-img" src={props.myworkimage} alt="" />
        </>
    );
}

const StatusBar = ({ posts, followers, following }) => {
    return (
        <div className="status-bar">
            <StatusBarItem label="Posts" value={posts} />
            <StatusBarItem label="Followers" value={followers} />
            <StatusBarItem label="Following" value={following} />
        </div>
    );
};

const StatusBarItem = ({ label, value }) => {
    return (
        <div className="status-item">
            <h5>{value}</h5>
            <p>{label}</p>
        </div>
    );
};

export default ProfilePage;