import React, { useState } from 'react';
import '../styles/ViewPost.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { DropDown, DropDownItem, NavItems } from './NavProfile';
import { faHeart, faFlag } from '@fortawesome/free-solid-svg-icons';//import used to add the eye icon, need to install package

const ViewPost = () => {
    const userTitle = "This is Title";
    const userDescription = "This is the user's description.";
    const imageType = "challenge"; //change depending on the user img type
    const userTag = "This is the user's tags";
    
    return (
        <div className='view-post-page'>
            <ImageView link="img2.jpg" altText="A beautiful landscape" />
            <div className='post-info'>
                <div className='post-type'>
                    {imageType === 'challenge' ? (
                        <>
                            <TitleView title={userTitle} />
                            <Challenge />
                        </>
                    ) : (
                        <TitleView title={userTitle} />
                    )}
                </div>
                <div className='post-description-container'>
                    <DescriptionView description={userDescription} />
                </div>
                <div className='tag-icon-container'>
                    <TagView tag={userTag} />
                    <div className='icon-container'>
                        <IconView id='heart-icon'>
                            <NavItems id='heart-item' icon={faHeart} />
                        </IconView>
                        <IconView id='flag-icon'>
                            <NavItems id='flag-icon-item' icon={faFlag}>
                                <DropDown>
                                    <DropDownItem link="#">Why are you reporting this?</DropDownItem>
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
    );
}

const ImageView = (props) => {
    return (
        <div className='img-section'>
            <img src={props.link} alt={props.altText} />
        </div>
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
const TitleView = (props) => {
    return (
        <div className='title-section'> {props.title} </div>
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

export default ViewPost;