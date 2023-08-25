import React from "react";
import '../styles/CreatePost.css'
import NavProfile from '../components/NavProfile'

const CreatePostContainer = () => {
    return (
        <div className='create-post-page'>
            <NavProfile/>
            <div className='upload-img-section'>
                <button id='upload-img-button'>Upload Image</button>
            </div>
            <div className='post-info'>
                <input
                    id='title-field'
                    type='text'
                    placeholder='Title'
                    width='100'>
                </input>

                <p>Select Post Type:</p>
                <div className='post-type'>
                    <button className='post-type-button'>POST</button>
                    <button className='post-type-button'>CHALLENGE</button>
                </div>

                <textarea
                    id='description-field'
                    type='text'
                    placeholder='Description'
                    resize>
                </textarea>

                <div className='center-button'>
                    <button id='post-button'>POST</button>
                </div>
            </div>
        </div>
    );
}

export default CreatePostContainer