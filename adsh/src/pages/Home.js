import React from "react";
import NavProfile from '../components/NavProfile'
import ChallengeWinners from "../components/ChallengeWinners";
import CurrentChallenge from "../components/CurrentChallenge";
import PostButtons from "../components/PostButtons/PostButtons";

const Home = () => {
    return (
        <div>
            <NavProfile/>
            <ChallengeWinners/>
            <CurrentChallenge/>
            <PostButtons/>
        </div>
    )
}

export default Home