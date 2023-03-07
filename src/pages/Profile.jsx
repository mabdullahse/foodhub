
import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { Link } from "react-router-dom";
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';


// import { typeScale } from '../utils/typography';
import { typeScale, primaryFont, typography } from "../utils";

import { PlusIcon, MinusIcon, FilterIcon, TickMark, BikeIcon, TimerIcon, HeartIcon, CartIcon, AlertIcon, TrendingIcon, LocationIcon, BackIcon, CloseIcon } from "../assets";
import Sidebar from './Sidebar';

import { useSpring, animated } from 'react-spring';
import AnimatedCard from './AnimatedCard';
import { SocialButton, EmailInput, PhoneInput , PrimaryButton } from '../components';


const Nav = styled.div`

    display: flex;
    align-items: center;  


    height: 10rem;
    overflow: hidden;
    background-image:  url('/images/profile-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;  


    & > div:nth-child(1) { 

        display: inline-block; 
        align-self: baseline;
        background-color: ${props => props.theme.primaryWhite};
        border-radius: 9px;
        padding: 10px; 
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        img {
            height: 1rem;
        }
    }
    
    & > div:nth-child(2) { 

        margin-inline: auto;
        align-self: flex-end;
        
       img {
        width: 4rem;
        background-color: #ffffff;
        padding: 4px;
        border-radius: 2rem;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        display: inline-block;
       }
        h5 {
            transform: translateX(-2rem);
        }
    }
    
       
`;





function Profile() {
    return (

        <div  >
            <Nav className='p-1'>
                <div>
                    <img src='/images/icon/back.png' />
                </div>
                <div className='text-center' style={{ transform: 'translateX(-32px)' }}>
                    <img src='/images/man.png' />
                    <h4>Muhammad Abdullah</h4>

                </div>

            </Nav>

            <div className='p-1'>
                <div>
                    <EmailInput label="Full name" placeholder="Muhammad Abdullah" />
                </div>

                <div>
                    <EmailInput label="E-mail" placeholder="emmabostian@gmail.com" />
                </div>
                <div>
                    <PhoneInput label="Phone" placeholder="+923054314377" />
                </div>

                <div className='mt-1'>
                    <PrimaryButton className='margin-inline-auto '>
                        Submit
                    </PrimaryButton>
                </div>

            </div>



        </div>
    );
}

export default Profile;