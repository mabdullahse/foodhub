

import React from "react";
import styled from "styled-components";

const Wrapper = styled.svg`
  width: 100%;
  height: 100%;
  fill: none;  
  `;
// stroke: green; 

export const BackIcon = ({ color = "#FE724C" }) => (
  <Wrapper aria-hidden="true" width="7" height="12" viewBox="0 0 7 12">
    <path d="M6 1L1 5.68393L5.60732 10" stroke="#111719" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  </Wrapper>
);


