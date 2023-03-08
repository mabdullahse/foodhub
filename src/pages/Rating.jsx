
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
import { SocialButton, EmailInput, PhoneInput, PrimaryButton } from '../components';
import { green } from './../utils/colors';


const Nav = styled.div` 

    & > div:nth-child(1) { 
        position: absolute;
        display: inline-block; 
        align-self: baseline;
        background-color: ${props => props.theme.primaryWhite};
        border-radius: 9px;
        padding: 10px; 
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        position: absolute;
        z-index: 999;
        left: 27px;
        top: 2rem;
        img {
            height: 1rem;
        }
    }
    
    .banner {
    position: relative;
    height: 150px;
    width: 100%;
    background: url("/images/foods/pizza.png");
    background-size: 100% 100%;
    margin-bottom: 42px;
    background-size: cover;

        .profile {
            position: absolute; 
            width: 26%;
            border: 1px solid #f2f2f2;
            border-radius: 50%;
            bottom: 0;
            margin-inline: auto; 
            transform: translateY(50%);
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            background: white;
        }
    } 
`;

const Description = styled.div`
    
    text-align: center;

    & > * {
        margin-bottom: 1rem;
    }

    & > *:nth-child(2) { 
        color: gray;
    }

    & > *:nth-child(3) { 
        color: ${green[100]};
        ::before {
            content: '*';
            margin-right:5px;
        }
    }

    & > *:nth-child(5) { 
        color: #ff0b0b;
        font-size: 1.5rem;
    }

    
    & > *:nth-child(6) { 
        
        img {
            width: 2rem; 
        }
    }

    textarea { 
        border: 1px solid #dadada;
        border-radius: 1rem;
        height: 6rem;
        width: 90%;
    }

`;



function Rating() {
    return (

        <div className='p-1'>
            <Nav >
                <div>
                    <img src='/images/icon/back.png' />
                </div>

                <div className='banner'  >
                    <img class="profile" src='/images/icon/food-rating.png' />


                </div>
            </Nav>

            <Description>
                <h2>Muhammad Abdullah</h2>
                <p>4102  Pretty View Lanenda</p>
                <p>Order Delivered</p>

                <h2>Please Rate Delivery Service</h2>
                <p>Good</p>
                <div className='flex g-1 justify-center'>
                    <img src='/images/icon/star.png' />
                    <img src='/images/icon/star.png' />
                    <img src='/images/icon/star.png' />
                    <img src='/images/icon/star.png' />
                    <img src='/images/icon/star.png' />
                </div>
                <textarea></textarea>

                <PrimaryButton className='margin-inline-auto w-100 justify-center'>
                        Submit
                  </PrimaryButton>
            </Description>

         



        </div>
    );
}

export default Rating;