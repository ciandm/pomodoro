import { css } from 'styled-components';

export const H1 = css`
  font-size: 100px;
  font-weight: bold;
  line-height: 120px;
  letter-spacing: -5px;
`

export const H2 = css`
  font-size: 28px;
  font-weight: bold;
  line-height: 34px;
`

export const H3 = css`
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  letter-spacing: 15px;
  text-transform: uppercase;
`

export const H4 = css`
  color: ${({ theme }) => theme.colors['mirage']};
  font-weight: 13px;
  font-weight: bold;
  line-height: 16px;
  letter-spacing: 5px;
  text-transform: uppercase;
`

export const BodyPrimary = css`
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
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