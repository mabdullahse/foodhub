
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
import { PrimaryButton } from '../components';


const FavNav = styled.div`

    display: flex;
    align-items: center; 
    margin-bottom: 2rem;;

    & > div:nth-child(1) { 

        display: inline-block; 
        background-color: ${props => props.theme.primaryWhite};
        border-radius: 9px;
        padding: 10px; 
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        img {
            height: 1rem;
        }
    }
    
    
    h3 { 
        display: flex;
        justify-content: center;
        flex: 1;
    }   
`;

const ToggleButton = styled.div`
    
    display: flex;
    border: 1px solid #e2d9d9;
    color: ${props => props.theme.primaryColor};
    border-radius: 5rem;
    padding: 2px;
    
    p {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
    }
`;

const FavFoods = styled.div`
    
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
    border-radius: 10px;


`;

const FoodImage = styled.div`

    height: 10rem;
    overflow: hidden;
    background-image:  url(${props => props.url} );
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center; 
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; 
    



    & > div:nth-child(1) {
        background-color: white;  
        display: flex;
        align-items: center; 
        width: 4rem;
        justify-content: center;
        border-radius: 1rem;
        padding: 7px;
        margin-top: 6px;
        margin-left: 6px;

        span {
            color: ${props => props.theme.primaryColor};
        }
        h3 {
            font-size: 1rem;
        }
    }

    & > div:nth-child(2) {
        background-color: white;  
        display: flex;
        align-items: center;  
        justify-content: center;
        border-radius: 1rem;
        margin-top: 6px;
        margin-left: 6px;
        width: 7rem;
        gap: 5px;
        margin-top: 6rem; 
        position: absolute; 
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        span {
            color: ${props => props.theme.primaryColor};
        }
        p {
            font-size: 1rem;
        }
        img {
            width: 1.2rem;
        }
    }

`;

const FoodDes = styled.div`
    margin: 1.5rem 1.5rem 1.5rem 6px;


    p {
        font-size: 15px;
    }
`;

function Favorites() {
    return (

        <div className='p-1'>
            <FavNav>
                <div>
                    <Link to="/home">
                        <img src='/images/icon/back.png' />
                    </Link>

                </div>

                <h3>Favoites</h3>

                <div>
                    <Link to="/profile">
                        <img src='/images/man.png' />
                    </Link>

                </div>
            </FavNav>

            <ToggleButton>

                <PrimaryButton >
                    Food Items
                </PrimaryButton>
                <p>
                    Resturents
                </p>

            </ToggleButton>

            <div className='flex flex-col gap-1 mt-1'>

                <FavFoods>

                    <FoodImage url="/images/foods/chicken.png ">
                        <div>
                            <span>$</span>
                            <h3>12.20</h3>
                        </div>
                        <div>
                            <h2>4.5</h2>
                            <div>
                                <img src='/images/icon/star.png' />
                            </div>
                            <p>(25+)</p>
                        </div>
                    </FoodImage>

                    <FoodDes>
                        <h3>Chicken Hawaiian</h3>
                        <p>
                            Chicken, Cheese and pineapple
                        </p>
                    </FoodDes>

                </FavFoods>


                <FavFoods>

                    <FoodImage url="/images/foods/palak.png ">
                        <div>
                            <span>$</span>
                            <h3>12.20</h3>
                        </div>
                        <div>
                            <h2>4.5</h2>
                            <div>
                                <img src='/images/icon/star.png' />
                            </div>
                            <p>(25+)</p>
                        </div>
                    </FoodImage>

                    <FoodDes>
                        <h3>Chicken Hawaiian</h3>
                        <p>
                            Chicken, Cheese and pineapple
                        </p>
                    </FoodDes>

                </FavFoods>
                <FavFoods>

                    <FoodImage url="/images/foods/pizza.png ">
                        <div>
                            <span>$</span>
                            <h3>12.20</h3>
                        </div>
                        <div>
                            <h2>4.5</h2>
                            <div>
                                <img src='/images/icon/star.png' />
                            </div>
                            <p>(25+)</p>
                        </div>
                    </FoodImage>

                    <FoodDes>
                        <h3>Red N Hot Pizza</h3>
                        <p>
                            Chicken, Chili
                        </p>
                    </FoodDes>

                </FavFoods>
            </div>


        </div>
    );
}

export default Favorites;