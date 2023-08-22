import React from 'react'
import { styled } from 'styled-components';//import used to make inline css easier
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';//import used to add icons, need to install package
import { faEye } from '@fortawesome/free-solid-svg-icons';//import used to add the eye icon, need to install package

const Context = styled.div`
    height: 60px;
    //background-color: #000000
`
//Above is called styled component, basically inline css
/*Note use uppercase wording, React works when word starts with uppcase including file names*/

const NavBarWrapper = styled.div`
    padding: 10px 20px;
    display: flex;//makes the items horizontal on one row
    align-items: center;
    justify-content: space-between;//adds spacing between items
`   
const Left = styled.div`
    flex: 1;
`
const Appnameview = styled.span`
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
`

const Center = styled.div`
    flex: .8;
    display: flex;
`
const SearchContainer = styled.div`
    border: 1px solid grey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 3px;
`
const InputText = styled.input`
    border: none;
`

const InputItem = styled.div`
    flex: .5;
`
const Submission = styled.span`
    font-size: 20px;
    cursor: pointer;
`

const Right = styled.div`
    flex: .5;
`
const ProfileView = styled.span`
    font-size: 20px;
    cursor: pointer;
`

const NavProfile = () => {
    return (
        <Context>
            <NavBarWrapper>
            <Left><Appnameview>APPNAME</Appnameview></Left>
            <Center> 
                <SearchContainer>
                    <InputText></InputText>
                    <FontAwesomeIcon icon={faEye} style={{color:"lightgrey"}} />
                </SearchContainer>
            </Center>
            <InputItem><Submission>Submission</Submission></InputItem>
            <Right><ProfileView>Profile</ProfileView></Right>
            </NavBarWrapper>
        </Context>
    )
} 

export default NavProfile 