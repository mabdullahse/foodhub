

import React from "react";
import styled from "styled-components";

const Wrapper = styled.svg`
  width: 100%;
  height: 100%;
  fill: none;  
  `;
// stroke: green; 

export const PlusIcon = ({ color = "#FE724C" }) => (
  <Wrapper aria-hidden="true" width="84" height="91" viewBox="0 0 84 91">
    <g filter="url(#filter0_d_814_6294)">
      <rect x="30" y="22" width="30.5981" height="30.5981" rx="15.2991" fill={color} />
    </g>
    <line x1="45.5586" y1="32.6494" x2="45.5586" y2="41.9488" stroke="white" stroke-width="1.5" stroke-linecap="round" />
    <line x1="40.6499" y1="37.0398" x2="49.9492" y2="37.0398" stroke="white" stroke-width="1.5" stroke-linecap="round" />
    <defs>
      <filter id="filter0_d_814_6294" x="0" y="0" width="90.5981" height="90.5981" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="8" />
        <feGaussianBlur stdDeviation="15" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.996078 0 0 0 0 0.447059 0 0 0 0 0.298039 0 0 0 0.251 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_814_6294" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_814_6294" result="shape" />
      </filter>
    </defs>
  </Wrapper>
);


