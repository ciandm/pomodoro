import { createGlobalStyle } from 'styled-components';
import breakpoints from './breakpoints';

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
    font-family: ${({ theme }) => theme.userFontChoice};
    min-height: 100vh;
    padding: 48px;

    @media screen and (max-width: ${breakpoints.sm}) {
      padding: 24px 16px;
    }
  }
`

export default GlobalStyle;