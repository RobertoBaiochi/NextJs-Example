import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
    /* font-family: 'Montserrat', sans-serif; */
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.secondary};
    margin: ${({ theme }) => theme.spacing.large} 0;
    /* font-family: 'Open Sans', sans-serif; */
  }
  p {
    margin: ${({ theme }) => theme.spacing.medium} 0;
  }
  ul, ol {
    margin: ${({ theme }) => theme.spacing.medium};
    padding: ${({ theme }) => theme.spacing.medium};
  }
  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;
