import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors['port_gore']};
    font-family: ${({ theme }) => theme.fontFamily};
    min-height: 100vh;
    padding: 48px;
  }
`

export default GlobalStyle;