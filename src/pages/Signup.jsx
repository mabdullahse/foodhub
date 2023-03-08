

import React from 'react';
import styled, { useTheme, css } from 'styled-components';
import { Link, Outlet, useNavigate } from "react-router-dom";

import { typeScale } from '../utils/typography';
import { SocialButton, EmailInput, PasswordInput, PrimaryButton } from '../components';
import { GoogleIcon, FacebookIcon, } from "../assets";
import { typography } from "../utils";


const Wrapper = styled.div` 
  
    height: 100%;
    display: grid;
    grid-template-rows: repeat(4, 1fr);

    & div:first-child { 
    }
    
    & div:nth-child(3) {
        grid-row-start: 4;
    } 
 
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


function Signup() {

    const theme = useTheme();



    return (
        <Wrapper>
            <img className='w-100' src="/images/header-circle.png" alt="" />

            <section className='child-margin p-1'>
                <Header1  >Sign Up</Header1>

                <div>
                    <EmailInput label="Full name" placeholder="Muhammad Abdullah" value="Example Name" />
                </div>

                <div>
                    <EmailInput label="E-mail" placeholder="example@gmail.com" value="example@gmail.com" />
                </div>
                <div>
                    <PasswordInput label="Password" placeholder="****" value="123" />
                </div>

                <Link to="/login" >
                    <PrimaryButton className='margin-inline-auto w-80 justify-center' >
                        SIGN UP
                    </PrimaryButton>
                </Link>


                <div className='flex justify-center mt-1'>
                    <p style={{ color: `${typography[200]}` }}>
                        Already have an account?
                    </p>
                    <p style={{ color: `${theme.primaryColor}` }}>
                        Login
                    </p>
                </div>


                <div>
                    <LoginLabel><span> sign in with</span></LoginLabel>

                    <div className='flex gap-1 justify-evenly mt-1'>
                        <SocialButton as="a" href="https://www.youtube.com/watch?v=SgmNxE9lWcY&ab_channel=SlayingTheDragon" type="google">
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

export default Signup;