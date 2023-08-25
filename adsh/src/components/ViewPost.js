import React, { useState } from 'react';
import '../styles/ViewPost.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavBar, DropDown, DropDownItem, NavItems } from './NavProfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faFlag, faRobot } from '@fortawesome/free-solid-svg-icons';//import used to add the eye icon, need to install package


const ViewPost = () => {
    const userTitle = "This is Title";
    const userDescription = "This is the user's description.";
    const imageType = "challenge"; //change depending on the user img type
    const userTag = "This is the user's tags";

    return (
        <div>

            <div className='view-post-page'>
                <NavBar>
                    <NavItems id='logo' icon={faRobot} className="fa-lg">
                    </NavItems>
                </NavBar>
                <ImageView link="land.jpg" altText="A beautiful landscape" />
                <div className='post-info'>
                    < TitleView title={userTitle} />
                    <div className='post-type'>
                        {
                            imageType === 'challenge' ? (<Challenge />) : (<Post />)
                        }
                    </div>
                    <div className='post-description-container'>
                        <DescriptionView description={userDescription} />
                    </div>
                    <hr />
                    <div className='tag-icon-container'>
                        <TagView tag={userTag} />
                        <div className='all-icon-container'>
                            <IconView id='heart-icon'>
                                <LikeCount/>
                            </IconView>
                            <IconView id='flag-icon'>
                                <NavItems id='flag-icon-item' icon={faFlag}>
                                    <DropDown>
                                        <p className='dropdown-text'>Why are you reporting this?</p>
                                        <DropDownItem link="#">AI Art</DropDownItem>
                                        <DropDownItem link="#">Stolen Art</DropDownItem>
                                        <DropDownItem link="#">Hateful</DropDownItem>
                                        <DropDownItem link="#">AI art</DropDownItem>
                                    </DropDown>
                                </NavItems>
                            </IconView>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const ImageView = (props) => {
    return (
        <div className='img-section'>
            <img src={props.link} alt={props.altText} />
        </div>
    )
};

const TitleView = (props) => {
    return (
        <div className='title-section'> {props.title} </div>
    )
};

const DescriptionView = (props) => {
    return (
        <textarea id='description-field' type='text' defaultValue={props.description} readOnly />
    )
};

const TagView = (props) => {
    return (
        <textarea className='tag-section' type='text' defaultValue={props.tag} readOnly />
    )
};

const Post = () => {
    return (
        <div className='post-item'>
            <p>Post</p>
        </div>
    )
};

const Challenge = () => {
    return (
        <div className='challenge-item'>
            <p>Challenge Submission</p>
        </div>
    )
};

const IconView = (props) => {
    return (
        <div className='icon-container'> {props.children} </div>
    )
};

const LikeCount = () => {
    const [countUp, setCountUp] = useState(0)
    return (
        <div className='like-count-container'>
            <button className='like-button' onClick={() => setCountUp(countUp + 1)}>
                <FontAwesomeIcon icon={faHeart} size="lg"/>
            </button>
            {countUp >= 0 && <span className="like-count">{countUp}</span>}
        </div>
    )
}

export default ViewPost;