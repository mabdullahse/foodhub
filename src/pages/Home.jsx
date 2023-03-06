import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';

// import { typeScale } from '../utils/typography';
import { typeScale, primaryFont, typography } from "../utils";

import { FilterIcon, TickMark, BikeIcon, TimerIcon, HeartIcon, CartIcon, AlertIcon, TrendingIcon, LocationIcon } from "../assets";
import Sidebar from './Sidebar';

import { useSpring, animated } from 'react-spring';
import AnimatedCard from './AnimatedCard';


const SkipButton = styled.div`
  color: ${props => props.theme.primaryColor}; 
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 50px;
  border: none;
  padding: 13px;
  margin-left: auto;
  display: inline-block;
`;

const FilterButton = styled(SkipButton)`
     border-radius: 5px;
`;

const Header1 = styled.h1`
    font-size: ${typeScale.header2};
    font-weight: bolder; 
    line-height: 2rem;
`;

const Input = styled.input`
  width: 316px;
  height: 52px; 
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

const Ellipse = styled.div`
    height: 5.99rem;
    min-width: 4rem;
    background-color: ${props => props.active ? props.theme.primaryColor : 'transparent'};
    border-radius: 30px;
    padding-top: 1px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   

    & > img {
        /* border: 1px solid red; */
        margin-inline: auto;
        background-color:  ${props => props.theme.primaryWhite};
        border-radius: 50%;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    & > p {
        /* border: 1px solid red; */
        margin-inline: auto;
        color:  ${props => props.active ? props.theme.primaryWhite : '#67666D'};
        text-align: center;
        font-size: 0.9rem;
        margin-top: 5px;
       
        text-overflow: ellipsis;
        overflow: hidden;  
        height: 1.2em; 
        width: 50px;
        white-space: nowrap;
    }
`;


const ResturentCard = styled.section`

    padding-bottom: 1rem;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    min-width: 15rem;
    & > * {
    /* margin-bottom: 1rem; */
    }
`;

const CardImageSection = styled.div`

 height: 7rem;
 overflow: hidden;
 background-image:  url("/images/welcome-bg.png");
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center center; 
/* background-blend-mode: lighten; */ 
    
`;

const CardBody = styled.div`
    padding: 5px;
    & > * {
    margin-bottom: 0.5rem;
    }
`;


const CategoryCardType = styled.div`
    
    display: flex;
    gap: 1rem;
   
    p {
        color: ${typography[300]};
        background-color: #F6F6F6;
        border-radius: 5px;
        padding: 3px 10px;
        font-size: 0.7rem;

        text-overflow: ellipsis;
        overflow: hidden;   
        width: 5rem;
        white-space: nowrap;
    }  
`;

const FotterMenu = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    position: sticky;
    bottom: 0;
    background: white;
    padding-block: 1rem;

    & > svg {
        width: 1.5rem;
    }
`;

const Wrapper = styled.div`
    position: relative;
`;



function Home() {
    const theme = useTheme();
    // const [showNav, setShowNav] = useState(false);




    const [showSidebar, setShowSidebar] = useState(false);

    const animation = useSpring({
        transform: showSidebar ? 'translateX(0%)' : 'translateX(-100%)',
        config: {
            duration: 750,
            delay: 0,
            mass: 2,
            tension: 400,
            friction: 50,
        },
    });

    return (

        <Wrapper>
            {
                <animated.div style={{ ...animation }}>
                    <Sidebar toggleSidebar={() => setShowSidebar(!showSidebar)} showModal={showSidebar} />
                </animated.div>
            }

            <div className='child-margin '>

                <section className='flex justify-between items-center p-inline-1'>
                    <div>
                        <SkipButton onClick={() => setShowSidebar(!showSidebar)}>
                            <img src="/images/icon/double-menu.png" alt="Menu" />
                        </SkipButton>
                    </div>

                    <div>
                        <div className='flex items-center gap-1'>
                            <p>  Deliver to</p>

                            <div>
                                <img src="/images/icon/arrow-down.png" alt="arrow down" />
                            </div>
                        </div>
                        <p style={{ color: `${theme.primaryColor}` }}>
                            4102  Pretty View Lane
                        </p>
                    </div>

                    <div>
                        <img src="/images/man.png" alt="profile-owner" />

                    </div>

                </section>


                <Header1 className='p-inline-1'> What would you like
                    to order</Header1>

                <div className='flex gap-1 p-1'>
                    <Input placeholder='Find or food or resturan...' />
                    <div>
                        <FilterButton>
                            <FilterIcon />
                        </FilterButton>
                    </div>
                </div>

                <section className='flex gap-1 overflow-auto p-bloack-1 p-inline-1'>

                    <Ellipse active="true">
                        <img src="/images/category/hamburger.png" alt="hamburger" />
                        <p>Burder</p>
                    </Ellipse>

                    <Ellipse  >
                        <img src="/images/category/butter.png" alt="butter" />
                        <p>Butter</p>
                    </Ellipse>

                    <Ellipse>
                        <img src="/images/category/sandwich.png" alt="Sandwich" />
                        <p>Sandwich</p>
                    </Ellipse>
                    <Ellipse>
                        <img src="/images/category/shrimp.png" alt="shrimp" />
                        <p>Shrimp</p>
                    </Ellipse>

                    <Ellipse>
                        <img src="/images/category/donat.png" alt="donat" />
                        <p>Donat</p>
                    </Ellipse>
                </section>


                <section className='flex justify-between items-center p-inline-1'>
                    <h3>Featured Restaurants</h3>
                    <div className='flex items-center gap-1'>
                        <p style={{ color: `${theme.primaryColor}` }}>
                            View All
                        </p>
                        <div>
                            <img src="/images/icon/right-icon.png" alt="arrow down" />
                        </div>
                    </div>
                </section>

                <section className='flex gap-1 overflow-auto h-10 p-b-1 '>

                    <ResturentCard >
                        <CardImageSection>
                        </CardImageSection>
                        <CardBody url="/images/resturants/macdonalt.png">
                            <div className='flex gap-1 items-center'>
                                <h3>
                                    McDonald's
                                </h3>
                                <div style={{ maxWidth: '1rem' }}>
                                    <TickMark color="#029094" ></TickMark>
                                </div>
                            </div>

                            <div className='flex gap-0-2'>
                                <div style={{ maxWidth: '1rem' }}>
                                    <BikeIcon ></BikeIcon>
                                </div>
                                <p> Free delivery</p>

                                <div style={{ maxWidth: '1rem', marginLeft: "1.5rem" }}>
                                    <TimerIcon ></TimerIcon>
                                </div>
                                <p>10-15 mins</p>
                            </div>

                            <CategoryCardType>
                                <p>BURGER</p>
                                <p>CHICKEN</p>
                                <p>FAST FOOD</p>
                            </CategoryCardType>

                        </CardBody>
                    </ResturentCard>


                    <ResturentCard >
                        <CardImageSection>
                        </CardImageSection>
                        <CardBody url="/images/resturants/macdonalt.png">
                            <div className='flex gap-1 items-center'>
                                <h3>
                                    McDonald's
                                </h3>
                                <div style={{ maxWidth: '1rem' }}>
                                    <TickMark color="#029094" ></TickMark>
                                </div>
                            </div>
                            <div className='flex gap-0-2'>
                                <div style={{ maxWidth: '1rem' }}>
                                    <BikeIcon ></BikeIcon>
                                </div>
                                <p> Free delivery</p>

                                <div style={{ maxWidth: '1rem', marginLeft: "1.5rem" }}>
                                    <TimerIcon ></TimerIcon>
                                </div>
                                <p>10-15 mins</p>
                            </div>
                            <CategoryCardType>
                                <p>BURGER</p>
                                <p>CHICKEN</p>
                                <p>FAST FOOD</p>
                            </CategoryCardType>
                        </CardBody>
                    </ResturentCard>



                </section>

                {
                    !showSidebar && <FotterMenu>
                        <TrendingIcon color='#FE724C' />
                        <LocationIcon />
                        <CartIcon />
                        <HeartIcon />
                        <AlertIcon />
                    </FotterMenu>
                }

            </div>
        </Wrapper>

    );
}

export default Home;