import React from "react";
import styled from "styled-components";

const StarIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
  fill: none;  
  `;
// stroke: green; 

export const StarIcon = () => (
    <StarIconWrapper aria-hidden="true">

        <g filter="url(#filter0_d_814_3844)">
            <path d="M36.1982 38L26.1821 32.7308L16.1659 38L18.0797 26.8409L9.9541 18.9371L21.1615 17.3095L26.1695 7L31.1776 17.3095L42.385 18.9371L34.2791 26.8409L36.1982 38Z" fill="#FFC529" />
        </g>
        <defs>
            <filter id="filter0_d_814_3844" x="0.145648" y="0.134083" width="52.0476" height="50.6169" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="2.94254" />
                <feGaussianBlur stdDeviation="4.90423" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.772549 0 0 0 0 0.160784 0 0 0 0.4 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_814_3844" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_814_3844" result="shape" />
            </filter>
        </defs>
    </StarIconWrapper>
);

