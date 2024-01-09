'use client';
import { createGlobalStyle } from 'styled-components';

export const sizes = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1150px',
  extraWide: '2000px',
};

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
  box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  
  html {
    
    --orange: #ff7d1a;
    --paleOrange: #ffede0;
    --pumpkinOrange: #ff7e1b;
    --hoverOrange: #ffab6a;
    --black: #1d2025;
    --darkGray: #68707d;
    --mediumGray: #b6bcc8;
    --lightGray: #f7f8fd;
    --white: #ffffff;
  }

  body {
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
    font-size: 0.9375rem;
    font-family: 'Kumbh Sans', sans-serif;
    font-weight: 400;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    
    margin: 0 auto;
    max-width: 38.75rem;

      @media (min-width: ${sizes.desktop}) {
        margin: 0 auto;
        max-width: 69.375rem;
      }
    
    }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  button { 
    border: 0;
    background: none;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }


  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
  
    font-weight: 700;
    color: var(--black);
  }

  p,
  a {
      font-size: 0.9375rem;
      line-height: 1.5625rem;
      font-weight: 400;
      color: var(--darkGray);
      text-decoration: none;

      @media (min-width: ${sizes.desktop}) {
        font-size: 1rem;
        line-height: 1.625rem;
      }
      
  }

  ul {
    list-style: none;
  }

  #root, #__next {
  isolation: isolate;
}
    
`;

export default GlobalStyle;
