import React, { useState } from "react";
import ReactDOM from "react-dom";

import styled, { ThemeProvider } from "styled-components";

import { GlobalStyle, defaultTheme, darkTheme } from "./utils";
import { EmailInput, PasswordInput } from './components';

import { CartIcon, CloseIcon, BackIcon, DecrementIcon, IncrementIcon, FilterIcon, StarIcon, HeartIcon, GoogleIcon, FacebookIcon, LogoutIcon } from "./assets";
import { PrimaryButton, SocialButton, ButtonIcon } from "./components";



const TemplateSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  & > * {
    align-self: start;   
  }
`;

const TemplateSection1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  & > * {
    align-self: start;  
    max-width: 80px;
  }
`;

const Sample = () => {
    const [useDarkTheme, setUseDarkTheme] = useState(false);
    return (
        <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>

            <main style={{ marginBottom: '2rem' }}>

                <section>
                    <h1>Button </h1>
                    <TemplateSection>
                        <PrimaryButton >
                            Show modal
                        </PrimaryButton>

                        <PrimaryButton >
                            <LogoutIcon />
                            <p style={{ fontWeight: 'bold' }}>  Log Out</p>
                        </PrimaryButton>

                        <SocialButton type="google">
                            <GoogleIcon />
                            <p style={{ fontWeight: 'bold' }}>Google</p>
                        </SocialButton>


                        <SocialButton type="facebook">
                            <FacebookIcon />
                            <p style={{ fontWeight: 'bold' }}>Facebook</p>
                        </SocialButton>

                        <ButtonIcon>
                            <BackIcon />
                        </ButtonIcon>

                    </TemplateSection>
                </section>

                <section>
                    <h1>Icon </h1>
                    <TemplateSection1>
                        <CartIcon />
                        <CloseIcon />
                        <DecrementIcon />
                        <IncrementIcon />
                        <FilterIcon />
                        <StarIcon />
                        <HeartIcon />
                    </TemplateSection1>
                </section>

                <section>
                    <h1>Text Field</h1>

                    <TemplateSection>
                        <EmailInput label="Email" placeholder="emmabostian@gmail.com" />
                    </TemplateSection>

                </section>
            </main>



            <GlobalStyle />
        </ThemeProvider>
    );
};

export default Sample;
