

import React from "react";
import styled from "styled-components";

const Wrapper = styled.svg`
  width: 100%;
  height: 100%;
  fill: none;  
  `;


export const MinusIcon = ({ color = "#FE724C" }) => (
  <Wrapper aria-hidden="true" width="92" height="91" viewBox="0 0 92 91">
    <g filter="url(#filter0_d_814_6299)">
      <rect x="31.2056" y="10.5" width="29.5981" height="29.5981" rx="14.7991" stroke={color} />
    </g>
    <line x1="41.3555" y1="25.0398" x2="50.6548" y2="25.0398" stroke={color} stroke-width="1.5" stroke-linecap="round" />
    <defs>
      <filter id="filter0_d_814_6299" x="0.705566" y="0" width="90.5981" height="90.5981" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="20" />
        <feGaussianBlur stdDeviation="15" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.934167 0 0 0 0 0.941204 0 0 0 0 0.95 0 0 0 1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_814_6299" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_814_6299" result="shape" />
      </filter>
    </defs>
  </Wrapper>
);


