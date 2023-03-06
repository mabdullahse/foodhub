
import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { Link } from "react-router-dom";

// import { typeScale } from '../utils/typography';
import { typeScale, primaryFont, typography } from "../utils";

import { PlusIcon, MinusIcon, FilterIcon, TickMark, BikeIcon, TimerIcon, HeartIcon, CartIcon, AlertIcon, TrendingIcon, LocationIcon, BackIcon, CloseIcon } from "../assets";
import Sidebar from './Sidebar';

import { useSpring, animated } from 'react-spring';
import AnimatedCard from './AnimatedCard';
import { PrimaryButton } from '../components';


const CartNav = styled.div`

    display: flex;
    align-items: center; 
    margin-bottom: 2rem;;

    & > div:nth-child(1) { 

        display: inline-block; 
        background-color: ${props => props.theme.primaryWhite};
        border-radius: 9px;
        padding: 10px;
        padding-bottom: 0px;
        padding-top: 6px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        & svg { 
        width: 0.5rem; 
        height: 0.5rem;
       }
    }
    
    & svg { 
        width: 0.9rem; 
    }
    h3 {
        transform: translateX(4rem);
    }
`;

const ItemImage = styled.div`  
    height: 82px;
    width: 82px;
    border-radius: 6px;
    overflow: hidden;
    background-image:  url(${props => props.url} );
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center; 
 `;
const ItemDes = styled.div`
    
    h5 {
        font-size: 11px;
    word-spacing: -1px;
    font-weight: bold;
    }

    p {
        font-size: 9px;
    }
    & > p:nth-child(3) {
        color: ${props => props.theme.primaryColor};
        font-weight: bold;
    }
`;

const ItemButton = styled.div`

    margin-left: -2rem;
    & > div:nth-child(1){
        width: 1rem;
        height: 1rem;
    }

    img {
        width: 1.5rem;
    }
`;

function Cart() {
    return (

        <React.Fragment>

            <div className='p-1'>
                <CartNav>

                    <div>
                        <Link to="/home"> <BackIcon /></Link>
                    </div>

                    <h3>Cart</h3>

                </CartNav>

                <div className='flex flex-col gap-1' >
                    <div className='flex gap-0-5'>

                        <ItemImage url="/images/resturants/macdonalt.png">

                        </ItemImage>

                        <ItemDes>
                            <h5>Red n hot pizza </h5>
                            <p>Spicy chicken, beef</p>
                            <p>$15.30</p>
                        </ItemDes>


                        <ItemButton>
                            <div style={{ marginLeft: 'auto' }}>
                                <CloseIcon />
                            </div>
                            <div className='flex gap-0-2 items-center transform-y-2 ml--3'>
                                <div>
                                    <img src="/images/icon/minus.png" />
                                </div>
                                <h2>05</h2>
                                <div>
                                    <img src="/images/icon/plus.png" />
                                </div>
                            </div>
                        </ItemButton>

                    </div>
                    <div className='flex gap-0-5'>

                        <ItemImage url="/images/resturants/macdonalt.png">

                        </ItemImage>

                        <ItemDes>
                            <h5>Red n hot pizza </h5>
                            <p>Spicy chicken, beef</p>
                            <p>$15.30</p>
                        </ItemDes>


                        <ItemButton>
                            <div style={{ marginLeft: 'auto' }}>
                                <CloseIcon />
                            </div>
                            <div className='flex gap-0-2 items-center transform-y-2'>
                                <div>
                                    <img src="/images/icon/minus.png" />
                                </div>
                                <h2>05</h2>
                                <div>
                                    <img src="/images/icon/plus.png" />
                                </div>
                            </div>
                        </ItemButton>

                    </div> 

                </div>


                
            </div>



            {/* <div className='p-1'>

                <div>
                    <Link to="/home"> <BackIcon /></Link>

                </div>

                <CardBody url="/images/resturants/macdonalt.png">

                    <div>
                        <Link to="/home"> <BackIcon /></Link>

                    </div>

                    <div>
                        <HeartIcon />
                    </div>

                </CardBody>

                <h2>Ground Beef Tacos</h2>

                <ReviewSection>
                    <div>
                        <StarIcon />
                    </div>
                    <p>
                        4.5
                    </p>
                    <p>
                        (30+)
                    </p>

                    <p>
                        See Review
                    </p>
                </ReviewSection>

                <FoodQuantity>

                    <div>
                        <p>
                            $
                        </p>
                        <h1>
                            9.50
                        </h1>
                    </div>
                    <div>
                        <div>
                            <img src="/images/icon/minus.png" />
                        </div>
                        <h2>05</h2>
                        <div>
                            <img src="/images/icon/plus.png" />
                        </div>
                    </div>
                </FoodQuantity>

                <p>
                    Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.
                </p>

                <h3>Choice of Add On</h3>

                <form>
                    <div className='flex justify-between items-center'>

                        <div className='flex items-center gap-1'>
                            <img src="/images/foods/peper.png" alt="" srcset="" />
                            <span className='nowrap'>Pepper  Julienned</span>
                        </div>


                        <div className='flex items-center gap-1'>
                            <h5>+$2.30</h5>
                            <input type="radio" name="radio" checked />
                        </div>
                    </div>

                    <div className='flex justify-between items-center'>

                        <div className='flex items-center gap-1'>
                            <img src="/images/foods/spinach.png" alt="" srcset="" />
                            <span className='nowrap'>Baby Spinach</span>
                        </div>


                        <div className='flex items-center gap-1'>
                            <h5>+$2.30</h5>
                            <input type="radio" name="radio" checked />
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>

                        <div className='flex items-center gap-1'>
                            <img src="/images/foods/mashroom.png" alt="" srcset="" />
                            <span className='nowrap'>Masroom</span>
                        </div>


                        <div className='flex items-center gap-1'>
                            <h5>+$2.30</h5>
                            <input type="radio" name="radio" checked />
                        </div>
                    </div>
                </form>

                <PrimaryButton style={{
                    bottom: '1rem',
                    margin: 'auto',
                    marginTop: '2rem'
                }}>
                    <CartIcon color="#fbfbfb" />
                    <p style={{ fontWeight: 'bold' }}>  ADD To CART</p>

                </PrimaryButton>

            </div> */}

        </React.Fragment>
    );
}

export default Cart;;