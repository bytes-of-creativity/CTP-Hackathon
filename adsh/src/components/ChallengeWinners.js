import React from 'react';
import '../styles/ChallengeWinners.css';
import PlaceholderView from '../assets/Placeholder_view.png';

const ChallengeWinners = () => {
    return (
        <>
            <div className="global-style"></div>
            <div className="background-container">
                <h1 className="winner-title">Challenge Winners</h1>
                <div className="img-container">
                    <div className="winner-user-container">
                        <img className="img-config" src={PlaceholderView} alt="Winner 2" />
                        <div id="winner-user-name">
                            Second Place
                        </div>
                    </div>
                    <div className="winner-user-container">
                        <img className="img-config" src={PlaceholderView} alt="Winner 1" />
                        <div id="winner-user-name">
                            First Place
                        </div>
                    </div>
                    <div className="winner-user-container">
                        <img className="img-config" src={PlaceholderView} alt="Winner 3" />
                        <div id="winner-user-name">
                            Third Place
                        </div>
                    </div>
                </div>
                <h2 className="previous-prompt">Previous Prompt:</h2>
            </div>
        </>
    );
};

export default ChallengeWinners;