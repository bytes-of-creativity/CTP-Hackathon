import React, { useState } from 'react';
import FeaturedPost from './FeaturedPost';
import ChallengePost from './ChallengePost';
import '../../styles/PostButtons.css'

const PostButtons = () => {
    const [activeContent, setActiveContent] = useState('featured');//allow feature post to be default

    const handleFeaturedClick = () => {
        setActiveContent('featured')
    }

    const handleChallengeClick = () => {
        setActiveContent('challenge')
    }

    return (
        <div>
            <div className="post-container">
                <button className={`featured-post ${activeContent === 'featured' ? 'active' : ''}`} onClick={handleFeaturedClick}>
                    Featured Post
                </button>
                <button className={`challenge-post ${activeContent === 'challenge' ? 'active' : ''}`} onClick={handleChallengeClick}>
                    Challenge Post
                </button>
            </div>
            <div className="content-section">
                {activeContent === 'featured' ? <FeaturedPost /> : null} {/*if activeContent varible is featured then show its few else return nothing*/}
                {activeContent === 'challenge' ? <ChallengePost /> : null}
            </div>
        </div>
    );
};

export default PostButtons;