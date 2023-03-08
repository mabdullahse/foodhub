import styled, { keyframes } from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

import { typeScale, typography, primaryFont } from "../utils";
import { green } from './../utils/colors';


export const BUTTON_MODIFIERS = {
  small: () => `
  padding: 8px;
  font-size: ${typeScale.helperText};
  `,
  large: () => `
  padding: 16px 24px;
  font-size: ${typeScale.header5};
  `,
  warning: ({ theme }) => `
    background-color: ${theme.status.warningColor};
    color: ${theme.textColorInverted};

    &:hover, &:focus {
      background-color: ${theme.status.warningColorHover};
    }

    &:active {
      background-color: ${theme.status.warningColorActive};
    }
  `,
  error: ({ theme }) => `
  background-color: ${theme.status.errorColor};
  color: ${theme.textColorInverted};

  &:hover {
    background-color: ${theme.status.errorColorHover};
  }

  &:active {
    background-color: ${theme.status.errorColorActive};
  }
  `,
  success: ({ theme }) => `
  background-color: ${theme.status.successColor};
  color: ${theme.textColorInverted};

  &:hover {
    background-color: ${theme.status.successColorHover};
  }

  &:active {
    background-color: ${theme.status.successColorActive};
  }
  `
};

export const Button = styled.button`

  padding: 8px 20px;
  border-radius: 50px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${primaryFont};
  font-size: ${typeScale.paragraph};
  transition: background-color 0.2s linear, color 0.2s linear;
  box-shadow:  ${props => props.theme.boxShadow};


  &:hover {
    background-color: ${props => props.theme.primaryHoverColor};
    color: ${props => props.theme.textColorOnPrimary};
    border-color: transparent;
  }

  &:focus {
    outline: 1px solid ${props => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${props => props.theme.primaryActiveColor};
    border-color: ${props => props.theme.primaryActiveColor};
    color: 'red';
  }
`;

const buttonClick = keyframes`
    from {
        scale: 1;
    }
    to {
        scale: 1.1;
    }
`;

export const PrimaryButton = styled(Button)`
  display: flex;
  gap: 1rem;
  align-items: center;

  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColorOnPrimary};
  border: 2px solid transparent;

  & > p {
    white-space: nowrap;
  }

  & > svg {
    flex-shrink: none;
  }

  &:disabled {
    background-color: ${props => props.theme.disabled};
    color: ${props => props.theme.textOnDisabled};
    cursor: not-allowed;
  }
  
  transition: all 300ms ease-in;
  &:hover {
    scale: 1.1;
    background-color: ${props => props.theme.primaryDarkColor};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;




export const SocialButton = styled.button`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 8px 20px;
  border-radius: 50px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${primaryFont};
  font-size: ${typeScale.paragraph};
  background-color: ${typography[100]};
  border: 1px solid ${typography[100]};
  transition: background-color 0.2s linear, color 0.2s linear;
  box-shadow:  ${props => props.theme.boxShadow};
  
  &:is(:hover, :focus, :active) { 
    border :1px solid  ${props => props.type === "google" ? '#529e66' : '#1877F2'};
  }  
`;



export const ButtonIcon = styled.button`

  padding: 8px 20px;
  border-radius: 9px; 
  height: 40px;
  cursor: pointer;
  font-family: ${primaryFont};
  font-size: ${typeScale.paragraph};
  transition: background-color 0.2s linear, color 0.2s linear;
  border: 0;
  box-shadow:  ${props => props.theme.boxShadow};
  background-color:  ${props => props.theme.primaryWhite};
  
  
  &:is(:hover, :focus, :active) { 
    border :1px solid  ${props => props.type === "google" ? '#529e66' : '#1877F2'};
  } 
`;