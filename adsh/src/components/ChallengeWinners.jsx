import React from 'react'
import { styled, createGlobalStyle } from 'styled-components';//import used to make inline css easier
import Placeholder_view from './Placeholder_view.png'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
`;//Added to fix extra space/gap on the left side, if better way please add/change and make jira ticket

const Winnerbackground = styled.div`
    height: 45vh;
    width:  100%;//use 100% of the width on this container
    display: flex;
    flex-direction: column;//Makes it so that Challenege And Previous Prompt are vertical( up and down)
    align-items: center;
    justify-content: space-between;//adds space in between Challenege and previous prompt
    padding: 10px 20px;
    margin: 30px 0px 50px;
    background-color: lightgrey;
`
//container for the drop-back background

const TitleWinner = styled.span`
    font-size: 50px;
    font-weight: bold;
`

const PreviousPrompt = styled.span`
    font-size: 30px;
    font-weight: bold;
`
//^^Requires back end work

const WinnerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 70%;
    margin: 1px 0px 18px;
`

const WinnerOneImg = styled.img`
    max-width: 50%;
    max-height: 50%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
`
//^^Requires back end work to Query database and retrieve winner one
const WinnerTwoImg = styled.img`
    max-width: 50%;
    max-height: 50%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
`
//^^Requires back end work to Query database and retrieve winner two
const WinnerThreeImg = styled.img`
    max-width: 50%;
    max-height: 50%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
`
//^^Requires back end work to Query database and retrieve winner three

const WinnerusernameContainer = styled.div`
    text-align: center;
`
const WinnerOneImgUser = styled.h3`
    text-align: center;
    cursor: pointer;
`
//^^Requires back end work to Query database and retrieve winner three

const WinnerTwoImgUser = styled.h3`
    text-align: center;
    cursor: pointer;
`
//^^Requires back end work to Query database and retrieve winner three

const WinnerThreeImgUser = styled.h3`
    text-align: center;
    cursor: pointer;
`
//^^Requires back end work to Query database and retrieve winner three
//What i'm doing here is that I have the WinnerIMG wrapped with the WinnerUsernameContainer
//So that it's easier to idenitfy which user is first second or third
//The code could use refactoring if your down please create jira ticket and do so :) please very much

//Its important to create a new container(div) when adding specifc objects/items to a pre-existing row to maintain order and its easier to work with that way I THINK idk
const ChallengeWinners = () => {
    return (
        <>
            <GlobalStyle />
            <Winnerbackground>
                <TitleWinner>
                    Challenge Winners
                </TitleWinner>
                <WinnerContainer>
                    <WinnerusernameContainer>
                        <WinnerTwoImg src={Placeholder_view} alt="Winner 2" />
                        <WinnerTwoImgUser>Winner 2 User</WinnerTwoImgUser>
                    </WinnerusernameContainer>
                    <WinnerusernameContainer>
                        <WinnerOneImg src={Placeholder_view} alt="Winner 1" />
                        <WinnerOneImgUser>Winner 1 User</WinnerOneImgUser>
                    </WinnerusernameContainer>
                    <WinnerusernameContainer>
                    <WinnerThreeImg src={Placeholder_view} alt="Winner 3" />
                    <WinnerThreeImgUser>Winner 3 User</WinnerThreeImgUser>
                    </WinnerusernameContainer>
                </WinnerContainer>
                <PreviousPrompt>
                    Previous Prompt:
                </PreviousPrompt>
            </Winnerbackground>
        </>
    )
}

export default ChallengeWinners