
import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { BackIcon, StarIcon } from "../assets";

import { PrimaryButton } from '../components';


const CardBody = styled.div`

    height: 10rem;
    overflow: hidden;
    background-image:  url(${props => props.url} );
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center; 

    & > div:nth-child(2) {
        margin-left: auto;
        float: right;
        margin-top: 1rem;
        margin-right: 1rem;
        background-color: red;
        border-radius: 65px;
        padding: 8px;
        padding-bottom: 0px;
    }

    & > div:nth-child(1) {
        display: inline-block;
        margin-left: 1rem; 
        margin-top: 1rem;
        margin-right: 1rem;
        background-color: ${props => props.theme.primaryWhite};
        border-radius: 9px;
        padding: 10px;
        padding-bottom: 0px;
        padding-top: 6px;

        & svg { 
        width: 1rem; 
        height: 1rem;
       }
    }
    
    & svg { 
        width: 1.5rem; 
    }
`;

const ReviewSection = styled.div`
  
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

  & svg {
    width: 2.78rem;
    height: 2.78rem;
  }

  & > p:last-child {
    color: ${props => props.theme.primaryColor};
    text-decoration: underline;
  }
`;

const FoodQuantity = styled.div`
    display: flex;
    justify-content: space-between;

    & > div:first-child {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        & h1,p {
        color: ${props => props.theme.primaryColor};
    }
    }

    & > div:nth-child(2) {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

   
     
`;
function FoodDetails() {
    return (
        <div className='p-1'>
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

        </div>
    );
}

export default FoodDetails;;