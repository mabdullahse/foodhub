import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

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

export function FoodList() {
    return (
        <div className='flex flex-col gap-1  '>

            <FavFoods as={Link} to="/foodDetails/1"  >

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


            <FavFoods as={Link} to="/foodDetails/2" >

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

            <FavFoods as={Link} to="/foodDetails/3" >

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
    );
}

