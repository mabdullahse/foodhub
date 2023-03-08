import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";

export const GlobalStyle = createGlobalStyle`


html {
  box-sizing: border-box;
  font-size: 16px;
}
 
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: inherit;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
h5,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

body {
  margin: 0;
  font-family: ${primaryFont};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  width: 90%;
  margin: 0 auto;
}




.w-100 {
  width: 100%;
}

.w-80 {
  width: 80%;
}

/** Flex  */
.flex {
  display: flex;
}

.justify-evenly {
  justify-content: space-evenly;
}

.justify-around {
  justify-content: space-around;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.justify-end {
  justify-content: end;
}

.items-center {
  align-items: center;
}

.flex-row {
  flex-direction: row;
}

.flex-col {
  flex-direction: column;
}

.gap-1 {
  gap: 1rem;
}

.gap-0-2 {
  gap: 0.2rem;
}

.gap-0-5 {
  gap: 0.5rem;
}

.gap-2 {
  gap: 2rem;
}

/** Text  */
.text-white {
  color: white;
}

.nowrap {
  white-space: nowrap;
}

.h-10 {
  min-height: 10rem;
}

.text-right {
  text-align: right;
}
.text-center {
  text-align: center;
}

.margin-inline-auto {
  margin-inline: auto;
}

.p-1 {
  padding: 1rem;
}

.p-bloack-1 {
  padding-block: 1rem;
}

.p-inline-1 {
  padding-inline: 1rem;
}

.p-b-1 {
  padding-bottom: 1rem;
}

.mt-1 {
  margin-top: 1rem;
}

.ml--30 {
  margin-left: -30px;
}

.mb-20 {
  margin-bottom: 4rem;
}

.overflow-auto {
  overflow: auto;
}

a {
  text-decoration: none;
}
.transform-y-2 {
  transform: translateY(2rem);
}

/**  Position */
.position-relative {
  position: relative;
}

.position-absolute {
  position: absolute;
}

/** Others  */
.child-margin > *:not(:last-child) {
  margin-bottom: 20px;
}

.rsbs {
  background-color: #fff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.rsbs-header {
  display: none;
}

.rsbs-footer {
  display: none;
}

.input-img {
  position: absolute;
  bottom: 8px;
  left: 10px;
}

`;
