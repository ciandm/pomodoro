import styled, { css } from 'styled-components';

export const Button = styled.button`
  align-items: center;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 50px;
  font-size: 15px;
  font-family: ${({ fontFamily }) => fontFamily ? fontFamily : 'inherit'};
  line-height: 1;
  position: relative;
  width: 50px;

  ${({ colorButton }) => colorButton && css`

    ${({ active }) => {
      if (active) {
        return css`
          & svg {
            visibility: visible;
          }
        `
      } else {
        return css`
          & svg {
            visibility: hidden;
          }
        `
      }
    }}
    & svg {
      fill: ${({ theme }) => theme.colors['mirage']};
    }
  `}

  ${({ fontButton }) => fontButton && css`
    color: ${({ active, theme }) => active ? theme.colors['white'] : theme.colors['port_gore']};
    font-family: ${({ fontFamily }) => fontFamily};
  `}

  &:hover {
      border-color: ${({ active, theme }) => active ? 'transparent' : theme.colors['white_lilac']};
    }

  & + & {
    margin-left: 16px;
  }

  &::before {
    ${({ fontButton, colorButton }) => {
    if (fontButton) {
      return css`
          background-color: ${({ active, theme }) => active ? theme.colors['mirage'] : theme.colors['white_lilac']};
        `
    } else if (colorButton) {
      return css`
        background-color: ${({ backgroundColor }) => backgroundColor};
        `
    }
  }}
    border-radius: 50px;
    content: '';
    display: block;
    height: 40px;
    position: absolute;
    width: 40px;
    z-index: -1;
  }
`