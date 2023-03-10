
import React, { useRef, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


import { FoodList, PrimaryButton } from '../components';
import { green } from '../utils/colors';
import MapComponent from '../components/MapComponent';

const Nav = styled.div` 

    & > div:nth-child(1) {  
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
    background: url("/images/resturants/macdonalt.jpg");
    background-size: 100% 100%;
    background-position: center;
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
        margin-bottom: 0.5rem;
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







function ResturentDetails() {




    return (

        <div className='p-1 position-relative'>
            <Nav >
                <div>
                    <Link to="/home" className='w-100   '>
                        <img src='/images/icon/back.png' />
                    </Link>
                </div>

                <div className='banner'  >
                    <img className="profile" src='/images/icon/food-rating.png' />


                </div>
            </Nav>

            <Description>
                <h2>McDonald's</h2>
                <p>4102  Pretty View Lanenda</p>
                <p>Order Delivered</p>


                <div className='flex g-1 justify-center'>
                    <img src='/images/icon/star.png' />
                    <img src='/images/icon/star.png' />
                    <img src='/images/icon/star.png' />
                    <img src='/images/icon/star.png' />
                    <img src='/images/icon/star.png' />
                </div>



            </Description>

            <div >
                <h3>Our Places</h3>
                <div style={{ height: '18rem', width: '100%' }}>
                    <MapComponent />
                </div>
            </div>

            <div className='pt-2'>
                <h3 className='p-b-1'>Our Famous</h3>
                <FoodList />
            </div>


        </div>
    );
}

export default ResturentDetails;