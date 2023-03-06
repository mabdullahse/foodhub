




import React from "react";
import styled from "styled-components";

const DecrementIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
  fill: none;  
  `;
// stroke: green; 

export const DecrementIcon = () => (
  <DecrementIconWrapper aria-hidden="true">
    <g filter="url(#filter0_d_814_5420)">
      <rect x="30.5" y="10.5" width="27.2803" height="27.2803" rx="13.6402" stroke="#FE724C" />
    </g>
    <line x1="39.8994" y1="23.8438" x2="48.3807" y2="23.8438" stroke="#FE724C" strokeWidth="1.5" strokeLinecap="round" />
    <defs>
      <filter id="filter0_d_814_5420" x="0" y="0" width="88.2803" height="88.2803" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="20" />
        <feGaussianBlur stdDeviation="15" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.934167 0 0 0 0 0.941204 0 0 0 0 0.95 0 0 0 1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_814_5420" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_814_5420" result="shape" />
      </filter>
    </defs>
  </DecrementIconWrapper>
);

