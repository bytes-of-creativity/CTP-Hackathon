import React from 'react';
import '../styles/PostView.css';

const PostView = () => {
    return (
        <div className="post-container">
            <button className="featured-post">Featured Post</button>
            <button className="challenge-post">Challenge Post</button>
        </div>
    );
};

export default PostView;