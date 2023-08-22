import React from "react";
import NavProfile from '../components/NavProfile'
import ChallengeWinners from "../components/ChallengeWinners";
import CurrentChallenge from "../components/CurrentChallenge";
import PostView from "../components/PostView";

const Home = () => {
    return (
        <div>
            <NavProfile/>
            <ChallengeWinners/>
            <CurrentChallenge/>
            <PostView/>
        </div>
    )
}

export default Home