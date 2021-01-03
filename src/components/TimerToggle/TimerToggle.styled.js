import styled, { css } from 'styled-components';
import { BodyPrimary } from '../../theme/typography';

export const Container = styled.div`
  display: flex;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors['mirage']};
  margin-bottom: 48px;
  padding: 8px;
  z-index: 500;

  @media screen and (max-width: 768px) {
    margin-bottom: 108px;
  }

  @media screen and (max-width: 375px) {
    margin-bottom: 48px;
    width: 100%;
  }
`

export const Toggle = styled.div`
  ${BodyPrimary};
  background-color: transparent;
  border-radius: 100px;
  color: ${({ theme }) => theme.colors['periwinkle']};
  cursor: pointer;
  opacity: .4;
  padding: 20px;
  text-transform: lowercase;

  &:hover {
    opacity: 1;
  }

  ${({ active }) => active && css`
    background-color: ${({ theme }) => theme.colors[theme.userColorChoice]};
    color: ${({ theme }) => theme.colors['mirage']};
    opacity: 1;
  `}
`