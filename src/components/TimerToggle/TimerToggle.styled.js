import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors['mirage']};
  margin-bottom: 48px;
  padding: 8px;
  z-index: 500;
`

export const Toggle = styled.div`
  background-color: transparent;
  border-radius: 100px;
  color: ${({ theme }) => theme.colors['periwinkle']};
  cursor: pointer;
  opacity: .4;
  padding: 16px 24px;
  text-transform: lowercase;

  &:hover {
    opacity: 1;
  }

  ${({ active }) => active && css`
    background-color: ${({ theme }) => theme.colors[theme.colorChoice]};
    color: ${({ theme }) => theme.colors['mirage']};
    opacity: 1;
  `}
`