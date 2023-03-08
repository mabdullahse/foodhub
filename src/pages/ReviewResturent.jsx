
import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { Link } from "react-router-dom";
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';


// import { typeScale } from '../utils/typography';
import { typeScale, primaryFont, typography } from "../utils";

import { StarIcon, HeartUnfill, FilterIcon, TickMark, BikeIcon, TimerIcon, HeartIcon, CartIcon, AlertIcon, TrendingIcon, LocationIcon, BackIcon, CloseIcon } from "../assets";
import Sidebar from './Sidebar';

import { useSpring, animated } from 'react-spring';
import AnimatedCard from './AnimatedCard';
import { SocialButton, EmailInput, PhoneInput, PrimaryButton } from '../components';
import { green } from '../utils/colors';


const Nav = styled.div` 

    & > div:nth-child(1) { 
        
        display: inline-block; 
        align-self: baseline;
        background-color: ${props => props.theme.primaryWhite};
        border-radius: 9px;
        padding: 10px; 
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
 
        
        img {
            height: 1rem;
            margin-inline: auto;
            border-radius: 9px;
        }
    }
    
 
`;

const Description = styled.div`
    
    text-align: center;

    img {
         
            box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
            margin-inline: auto;
            border-radius: 15px;
    }


    & > * {
        margin-bottom: 1rem;
    }

    & > *:nth-child(2) { 
       line-height: 1.5rem;
    }

    & > *:nth-child(3) { 
        color: #ff0b0b;
    }

    .star-section {
        height: 3rem;
        width: 77%;
        margin-inline: auto;

        & > * {
            flex: 1; 
            
        }
        & > *:last-child {
            height: 2rem
        }
    }
  
    
  

    textarea { 
        border: 1px solid #dadada;
        border-radius: 1rem;
        height: 6rem;
        width: 90%;
    }

`;



function ReviewResturent() {
    return (

        <div className='p-1'>
            <Nav >
                <div>
                    <img src='/images/icon/back.png' />
                </div>


            </Nav>

            <Description>

                <img src='/images/resturants/pizzahut.png' />
                <h2>How was your last order from Pizza Hut ?</h2>


                <p>Good</p>
                <div className='flex g-1 justify-center star-section items-center'>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <HeartUnfill />
                </div>
                <textarea></textarea>

                <PrimaryButton className='margin-inline-auto w-80 justify-center'>
                    Submit
                </PrimaryButton>
            </Description>





        </div>
    );
}

export default ReviewResturent;