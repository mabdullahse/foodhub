import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { typeScale } from '../utils/typography';
import { SocialButton } from "../components";

import { GoogleIcon, FacebookIcon } from "../assets";
import { primaryFont } from "../utils";


const Wrapper = styled.div` 
    padding: 1rem;
    background-color: ${props => {
        return props.theme.primaryColor;
    }};
    background-image:  url("/images/welcome-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center; 
    /* background-blend-mode: lighten; */

    height: 100%;
    display: grid;
    grid-template-rows: repeat(4, 1fr);

    & div:first-child {
        /* grid-row-start: 2; */
    }
    
    & div:nth-child(3) {
        grid-row-start: 4;
    } 

    &:before {
    content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(to bottom right,#f9f9f9,#080808);
        opacity: .6; 
  }

  & > * {
    backdrop-filter: blur(1px);
  }
`;

const WhiteLine = styled.p`
    width: 50%;
    height: 5px;
    border-radius: 50px;
    background: white;
    margin-inline: auto;
`;

const Header1 = styled.h1`
    font-size: ${typeScale.header1};
    font-weight: bolder; 
`;

const Header1AppName = styled(Header1)` 
    color: ${props => {
        return props.theme.primaryColor;
    }};

`;

const LoginLabel = styled.h4`
  display: flex;
  flex-direction: row;
  color: white;

&:before, &:after {
  content: "";
  flex: 1 1;
  border-bottom: 3px solid white;
  margin: auto;
  margin-inline:  8px;
}
`;

const ButtonPhone = styled.button`
  padding: 8px 20px;
  border-radius: 50px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${primaryFont};
  font-size: ${typeScale.paragraph};
  transition: background-color 0.2s linear, color 0.2s linear;
  background-color: #85858500;
  border: 3px solid gray;

  &:hover {
    color: ${props => props.theme.textColorOnPrimary};
    border-color: transparent;
  }

`;

const SkipButton = styled.button`
  color: ${props => props.theme.primaryColor}; 
  border-radius: 50px;
  border: none;
  padding: 5px 12px; 
  margin-left: auto; 
`;

const Shahow = styled.div`
    background-color: rgba(0,0,0,.6);
    
`;

const mainWrapper = styled.div`
    padding: 10%;
`;

function Welcome() {
    return (

        <Wrapper>

            <div className='text-right'>

                <Link to="/signup">
                    <SkipButton>
                        Skip
                    </SkipButton>
                </Link>
            </div>

            <div>
                <Header1> Welcome to</Header1>
                <Header1AppName> Food Hub</Header1AppName>
                <p style={{ maxWidth: "70%" }}>Your favourite foods delivered fast at your door.</p>
            </div>

            <div className='w-100 flex flex-col child-margin '>
                <LoginLabel><span> sign in with</span></LoginLabel>

                <div className='flex gap-1 justify-evenly'>

                    <Link to="/home">
                        <SocialButton type="google">
                            <GoogleIcon />
                            <p style={{ fontWeight: 'bold' }}>Google</p>
                        </SocialButton>
                    </Link>

                    <Link to="/home">
                        <SocialButton type="facebook">
                            <FacebookIcon />
                            <p style={{ fontWeight: 'bold' }}>Facebook</p>
                        </SocialButton>
                    </Link>
                </div>

                <Link to="/signup" className='text-center'>
                    <ButtonPhone>
                        Start with email or phone
                    </ButtonPhone>
                </Link>


                <div className='text-white flex gap-1 justify-center'>
                    <p >
                        Already have an account?
                    </p>
                    <p >
                        <Link to="/login">
                            Sign In
                        </Link>
                    </p>
                </div>

                <WhiteLine></WhiteLine>

            </div>

        </Wrapper >


    );
}

export default Welcome;

