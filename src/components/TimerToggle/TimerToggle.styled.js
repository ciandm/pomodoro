import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 100%;
  padding: 8px;
`

export const Toggle = styled.div`
  background-color: transparent;
  border-radius: 100%;
  color: ${({ theme }) => theme.colors['periwinkle']};
  padding: 16px 24px;

  ${({ active }) => active && css`
  
  `}
`