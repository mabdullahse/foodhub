
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';


import {
    primaryFont, typography
} from "../utils";

import { CloseIcon } from "../assets";

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
    flex-grow: 1;
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
    margin-right: 0.5rem;


    & > div:nth-child(1){
        width: 1rem;
        height: 1rem;
    }

    img {
        width: 1.5rem;
    }
`;

const SwipeSection = styled.div`
    display  : flex;


`;

const styles = {
    title: {
        padding: '6px 0px',
        minHeight: '64px',
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        padding: '10px',
        boxSizing: 'border-box',
        backgroundColor: 'white',
        fontSize: '18px',
        minHeight: '50vh'
    }
};

const Input = styled.input`
  width: 80%;
  height: 33px; 
  border: 1px solid ${typography[200]};
  padding-left: 8px;
  font-family: ${primaryFont};
  border-radius: 10px;
  color: ${props => props.theme.textOnFormElementBackground};
  font-weight: bold;

  &:focus-visible { 
    outline: transparent;
    border: 1px solid ${props => props.theme.primaryColor};
  }
`;

const PromoImg = styled.img`
    height: 2rem; 
`;

const ReciptSection = styled.section`
    
    justify-content: end;
    padding-block: 0.8rem;
    border-bottom: 1px solid #dddee0;
    & > div {
        display: flex;
        display: flex;
        p {
            font-weight: bold;
            flex: 1;
        }

        & > div {
            flex: 1;
            display: flex;
            justify-content: end;

            p {
                font-weight: bold;
                text-align: end;
                margin-right: 3px;
            }
            span {
                color: ${props => props.theme.textOnDisabled};
            }
        }
    }
`;

function Cart() {

    const [barStatus, setBarStatus] = useState(false);

    const togglePromo = () => {
        setBarStatus((state) => !state);
    };

    return (

        <React.Fragment>

            <div className='p-1'>
                <CartNav>

                    <div>
                        <Link to="/home">
                            <PromoImg onClick={togglePromo} src='/images/icon/back.png' />
                        </Link>

                    </div>

                    <h3>Cart</h3>

                </CartNav>

                <div className='flex flex-col gap-1' >
                    <div className='flex gap-0-5' style={{ 'boxShadow': 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}>

                        <ItemImage url="/images/foods/chicken.png">

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
                    <div className='flex gap-0-5' style={{ 'boxShadow': 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}>

                        <ItemImage url="/images/foods/peper.png">

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


                <div className='mb-20 mt-1'>
                    <ReciptSection>

                        <div>
                            <p>Subtotal</p>

                            <div>
                                <p>$27.30</p>
                                <span>USD</span>
                            </div>
                        </div>
                    </ReciptSection>

                    <ReciptSection>

                        <div>
                            <p>Tax and Fees</p>

                            <div>
                                <p>$27.30</p>
                                <span>USD</span>
                            </div>
                        </div>
                    </ReciptSection>
                    <ReciptSection>

                        <div>
                            <p>Delivery</p>

                            <div>
                                <p>$27.30</p>
                                <span>USD</span>
                            </div>
                        </div>
                    </ReciptSection>

                    <ReciptSection>

                        <div>
                            <p>Total</p>

                            <div>
                                <p>$27.30</p>
                                <span>USD</span>
                            </div>
                        </div>
                    </ReciptSection>

               

                        <Link to="/reviews/1" className='w-100   '>
                            <PrimaryButton className='justify-center mt-1 w-80 margin-inline-auto'>
                                CHECKOUT
                            </PrimaryButton>
                        </Link>
                   
                </div>




                <SwipeableBottomSheet
                    overflowHeight={55}
                    open={barStatus}
                    onChange={togglePromo}
                >
                    <div style={styles.title}>
                        <p>Promo Code Apply</p>

                        {
                            barStatus ? <PromoImg onClick={togglePromo} src='/images/icon/close.png' />
                                : <PromoImg onClick={togglePromo} src='/images/icon/promocode.png' />
                        }



                        {/* <PrimaryButton onClick={() => {
                            setBarStatus((state) => !state);
                        }}>
                            {barStatus ? 'Close' : 'Open'}
                        </PrimaryButton> */}
                    </div>


                    <div style={styles.text}>
                        <div className='items-center' style={{ display: "flex", flexDirection: "row", marginTop: "16px" }}>

                            <Input id="email" type="text" placeholder="Enter Code" />

                            <PromoImg onClick={togglePromo} src='/images/icon/apply-code.png' />

                        </div>
                    </div>
                </SwipeableBottomSheet>

            </div>





        </React.Fragment >
    );
}

export default Cart;;