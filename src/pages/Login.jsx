

import React from 'react';
import styled, { useTheme } from 'styled-components';

import { typeScale } from '../utils/typography';
import { SocialButton, EmailInput, PasswordInput, PrimaryButton } from '../components';
import { GoogleIcon, FacebookIcon, } from "../assets";
import { typography } from "../utils";


const Wrapper = styled.div` 
  
    height: 100%;
    display: grid;
    grid-template-rows: repeat(4, 1fr);

    & div:first-child {
        /* grid-row-start: 2; */
    }
    
    & div:nth-child(3) {
        grid-row-start: 4;
    }
    /* align-items: center; */
    /* justify-content: space-evenly;
    flex-direction: column; */
 
`;

const Header1 = styled.h1`
    font-size: ${typeScale.header1};
    font-weight: bolder;
`;

const LoginLabel = styled.h4`
  display: flex;
  flex-direction: row;
  color:  ${typography[200]};

&:before, &:after {
  content: "";
  flex: 1 1;
  border-bottom: 1px solid  ${typography[200]};
  margin: auto;
  margin-inline:  8px;
}
`;



function Login() {

    const theme = useTheme();



    return (
        <Wrapper>
            <img src="/images/header-circle.png" alt="" srcset="" />

            <section className='child-margin p-1'>
                <Header1>Login</Header1>
                <div>
                    <EmailInput label="E-mail" placeholder="emmabostian@gmail.com" />
                </div>
                <div>
                    <PasswordInput label="Password" placeholder="****" />
                </div>

                <p style={{ color: `${theme.primaryColor}` }} className="text-center">
                    Forget password?
                </p>

                <PrimaryButton className='margin-inline-auto '>
                    SIGN UP
                </PrimaryButton>

                <div className='flex justify-center'>
                    <p style={{ color: `${typography[200]}` }}>
                        Don't have an account?
                    </p>

                    <p style={{ color: `${theme.primaryColor}` }}>
                        Sign up
                    </p>
                </div>

                <div style={{
                    position: '     ',
                    bottom: '17px'
                }}>
                    <LoginLabel><span> sign in with</span></LoginLabel>
                    <div className='flex gap-1 justify-evenly mt-1'>
                        <SocialButton type="google">
                            <GoogleIcon />
                            <p style={{ fontWeight: 'bold' }}>Google</p>
                        </SocialButton>
                        <SocialButton type="facebook">
                            <FacebookIcon />
                            <p style={{ fontWeight: 'bold' }}>Facebook</p>
                        </SocialButton>
                    </div>
                </div>
            </section>

        </Wrapper >
    );
}

export default Login;