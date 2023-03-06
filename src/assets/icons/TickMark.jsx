

import React from "react";
import styled from "styled-components";

const TickMarkWrapper = styled.svg`
  width: 100%;
  height: 100%;
  fill: none;   
  `;

export const TickMark = ({ color = '#029094' }) => {
  return (
    <TickMarkWrapper aria-hidden="true" width="10" height="10" viewBox="0 0 10 10">
      <circle cx="5" cy="5" r="5" fill={color} />
      <path d="M3.3335 4.22214L4.5835 5.55547L6.66683 3.33325" stroke="white" />
    </TickMarkWrapper>
  );

}




