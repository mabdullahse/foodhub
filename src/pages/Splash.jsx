import React, { useEffect } from 'react';
import styled, { keyframes }  from 'styled-components';
import { useNavigate } from "react-router-dom";


const buttonClick = keyframes`
    from {
        scale: 1;
    }
    to {
        scale: 1.1;
    }
`;

const Wrapper = styled.div`
    
    background-color: ${props => {
        return props.theme.primaryColor;
    }};
    height: 100%;
    display: grid;
    justify-content: space-evenly;
    align-items: flex-end;
    flex-direction: column;

    img {
        animation-name: ${buttonClick};
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-fill-mode: forwards; // it will not applied as the count is infinite
    }
`;

const WhiteLine = styled.p`
    width: 100%;
    height: 5px;
    border-radius: 50px;
    background: white;
    margin-bottom: 17px;
`;


function Splash() {
    const navigate = useNavigate();



    useEffect(() => {
        setTimeout(() => {
            navigate("/welcome");
        }, 1000);
    });
    return (
        <Wrapper>
            <div>
                <img src="/images/splash.png" alt="My Image" />

            </div>

            <WhiteLine></WhiteLine>


        </Wrapper>
    );
}

export default Splash;