
import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


import { DotsMenu } from "../assets";
import { TextInput, PrimaryButton } from '../components';



const PageContainer = styled.div`
     padding: 1rem;

     & > * {
         margin-bottom   : 1rem;
     }
`;
const Nav = styled.div`
    
    display: flex;
    align-items: center;  
    justify-content: center;


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
        flex: 1;
    } 
`;


const ReviewSection = styled.section`
    
    .review-info {
        display: flex;
        gap: 0.5rem;

        &-profile {
            position: relative; 

            span {
                position: absolute;
                background-color: #FFC529;
                color: white;
                border-radius: 25%;
                padding: 1px 2px;
                font-size: 12px;
                font-weight: 900;
                right: 0;
                bottom: 0.1rem;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            }
        }

        &-label {
           flex: 1;
            p {
                line-height: 7px;
                color: gray;
            }
        }
    }

    p {
        padding: 0.5rem;
    }

`;


function Reviews() {
    return (

        <PageContainer>
            <Nav >
                <div>
                    <Link to="/cart">
                        <img src='/images/icon/back.png' />
                    </Link>
                </div>
                <div className='text-center'  >
                    <h4>Muhammad Abdullah</h4>
                </div>

            </Nav>

            <div className="flex items-center">

                <TextInput label="" placeholder="Write your review..."
                    className="  margin-inline-auto "
                    icon="/images/man.png" />

                <Link to="/rating" className='w-100   '>

                    <PrimaryButton className='justify-center mt-1 w-80 margin-inline-auto'>
                        Add
                    </PrimaryButton>
                </Link>

            </div>



            <div>
                <ReviewSection>

                    <div className='review-info'>
                        <div className='review-info-profile'>
                            <img src='/images/profile/man-face.png' />
                            <span>4.5</span>
                        </div>

                        <div className='flex-col review-info-label'>
                            <h3>Muhammad Abdullah</h3>
                            <p>22/06/2020</p>
                        </div>

                        <div>
                            <DotsMenu />
                        </div>

                    </div>
                    <p>
                        Been a life saver for keeping our sanity during the pandemic, although they could improve some of their ui and how they handle specials as it often is unclear how to use them or everything is sold out so fast it feels a bit bait and switch. Still I'd be stir crazy and losing track of days without so...
                    </p>
                </ReviewSection>

                <ReviewSection>

                    <div className='review-info'>
                        <div className='review-info-profile'>
                            <img src='/images/profile/man-face.png' />
                            <span>4.5</span>
                        </div>

                        <div className='flex-col review-info-label'>
                            <h3>Helsmar E</h3>
                            <p>22/06/2020</p>
                        </div>

                        <div>
                            <DotsMenu />
                        </div>

                    </div>
                    <p>
                        Been a life saver for keeping our sanity during the pandemic, although they could improve some of their ui and how they handle specials as it often is unclear how to use them or everything is sold out so fast it feels a bit bait and switch. Still I'd be stir crazy and losing track of days without so...
                    </p>
                </ReviewSection>


                <ReviewSection>

                    <div className='review-info'>
                        <div className='review-info-profile'>
                            <img src='/images/profile/woman-face.png' />
                            <span>4.5</span>
                        </div>

                        <div className='flex-col review-info-label'>
                            <h3>Brian C</h3>
                            <p>22/06/2020</p>
                        </div>

                        <div>
                            <DotsMenu />
                        </div>

                    </div>
                    <p>
                        Been a life saver for keeping our sanity during the pandemic, although they could improve some of their ui and how they handle specials as it often is unclear how to use them or everything is sold out so fast it feels a bit bait and switch. Still I'd be stir crazy and losing track of days without so...
                    </p>
                </ReviewSection>
            </div>
        </PageContainer>

    );
}

export default Reviews;