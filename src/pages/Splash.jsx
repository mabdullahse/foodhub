import React from 'react';
import styled from 'styled-components'; 


const Wrapper = styled.div`
    
    background-color: ${props => {
        return props.theme.primaryColor;
    }};
    height: 100%;
    display: grid;
    justify-content: space-evenly;
    align-items: flex-end;
    flex-direction: column;
`;

const WhiteLine = styled.p`
    width: 100%;
    height: 5px;
    border-radius: 50px;
    background: white;
    margin-bottom: 17px;
`;

function Splash() {
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