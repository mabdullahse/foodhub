import React from 'react';
import styled, { useTheme } from 'styled-components';
import { animated, useSpring } from "react-spring";

// import { typeScale } from '../utils/typography';
import { typeScale, primaryFont, typography } from "../utils";

import { OrderIcon, MailIcon, HelpIcon, SettingsIcon, PaymentIcon, ProfileIcon, FilterIcon, TickMark, BikeIcon, TimerIcon, HeartIcon, CartIcon, AlertIcon, TrendingIcon, CloseIcon, LogoutIcon } from "../assets";
import { PrimaryButton } from '../components';


const Aside = styled.aside`

    background-color: #e3dcdc;
    height: 100%;
    width: 250px;
    min-width: 250px; 
    padding-left: 1rem;
    padding-top: 1rem;
    position: fixed;
    z-index: 9;
    transition: all 2.5s ease; 
    height: 100vh;
`;

const ProfileMenu = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    & > img {
        width: 5rem;
        border-radius: 50px;
        align-self: flex-start;
    }

    & > h4 {
        margin-top: 5px;
    }

    & > p {
        color: ${typography[200]};
    }
`;

const Nav = styled.nav`
    

`;

const UlList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    & > li {
        margin-top: 1rem;
    }
`;
const LiItem = styled.li`
    display: flex;
    gap: 1rem;
    

& > svg {
    max-width: 1.5rem;
}
`;

const SkipButton = styled.div`
 
  border-radius: 50px;
  border: none;
  padding: 13px;
  margin-left: auto;
  display: inline-block; 
  position: absolute;
  right: 7px; 
  
  
  & > svg {
    height: 1rem;
    max-width: 1rem;
  
    width: 32px;
  }
`;




function Sidebar({ toggleSidebar, showModal }) {
    return (

        <Aside>

            <ProfileMenu>
                <div>
                    <SkipButton onClick={toggleSidebar}>
                        <CloseIcon />
                    </SkipButton>
                </div>

                <img src="/images/man.png" alt="Customer profile" />
                <h4>Muhammmad Abdullah</h4>
                <p>mabdullah.se@gmail.com</p>
            </ProfileMenu>
            <Nav>
                <UlList>
                    <LiItem>
                        <OrderIcon />
                        <p>My Order</p>
                    </LiItem>
                    <LiItem>
                        <ProfileIcon />
                        <p>My Profile</p>
                    </LiItem>
                    <LiItem>
                        <MailIcon />
                        <p>Delivery Address</p>
                    </LiItem>
                    <LiItem>
                        <PaymentIcon />
                        <p>Payment Methods</p>
                    </LiItem>
                    <LiItem>
                        <OrderIcon />
                        <p>Contact Us</p>
                    </LiItem>
                    <LiItem>
                        <SettingsIcon />
                        <p>Settings</p>
                    </LiItem>
                    <LiItem>
                        <HelpIcon />
                        <p>Help & FAQs</p>
                    </LiItem>
                </UlList>
            </Nav>

            <PrimaryButton style={{
                position: 'absolute',
                bottom: '1rem'
            }}>
                <LogoutIcon />
                <p style={{ fontWeight: 'bold' }}>  Log Out</p>

            </PrimaryButton>

        </Aside>

    );
}

export default Sidebar;