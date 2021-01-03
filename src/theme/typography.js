import { css } from 'styled-components';
import breakpoints from './breakpoints';

export const H1 = css`
  font-size: 100px;
  font-weight: bold;
  line-height: 120px;
  letter-spacing: -5px;

  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: 72px;
    line-height: 1;
  }
`

export const H2 = css`
  font-size: 28px;
  font-weight: bold;
  line-height: 34px;

  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: 20px;
    line-height: 20px;
  }
`

export const H3 = css`
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  letter-spacing: 15px;
  text-transform: uppercase;

  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: 14px;
    line-height: 1;
  }
`

export const H4 = css`
  color: ${({ theme }) => theme.colors['mirage']};
  font-size: 13px;
  font-weight: bold;
  line-height: 16px;
  letter-spacing: 5px;
  text-transform: uppercase;

  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: 11px;
    line-height: 1;
  }
`

export const BodyPrimary = css`
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;

  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: 12px;
    line-height: 1;
  }
`

export const BodySecondary = css`
  font-size: 12px;
  font-weight: bold;
  line-height: 14px;
`

export const fontChoices = [
  {
    id: 1,
    fontName: 'Kumbh Sans'
  },
  {
    id: 2,
    fontName: 'Roboto Slab'
  },
  {
    id: 3,
    fontName: 'Space Mono'
  },
]