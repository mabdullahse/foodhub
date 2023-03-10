

import React from "react";
import styled from "styled-components";

const Wrapper = styled.svg`
  width: 100%;
  height: 100%;
  fill: none;  
  `;
// stroke: green; 

export const HeartUnfill = ({ color = "#FFC529" }) => (
  <Wrapper aria-hidden="true" width="33" height="31" viewBox="0 0 33 31">
    <path d="M23.3394 20.0104L24.9148 29.1708L16.6935 24.8458L16.228 24.6009L15.7624 24.8458L7.54003 29.1713L9.11122 20.01L9.2002 19.4911L8.82286 19.1241L2.15177 12.6351L11.3511 11.2991L11.8754 11.223L12.1068 10.7464L16.2154 2.28861L20.324 10.7464L20.5555 11.223L21.0798 11.2991L30.2822 12.6355L23.6268 19.125L23.2503 19.4921L23.3394 20.0104Z" stroke={color} strokeWidth="2" />
  </Wrapper>
);


