
import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


import { PrimaryButton, FoodList } from '../components';


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

            <div className='mt-1'>
                <FoodList />
            </div>



        </div>
    );
}

export default Favorites;