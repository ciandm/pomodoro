import styled from 'styled-components';
import {
  H1,
  H3
} from '../../theme/typography';

export const TimerContainer = styled.div`
  align-items: center;
  background: ${({ theme }) => `linear-gradient(315deg, ${theme.colors['port_gore']}, ${theme.colors['mirage']})`};
  border-radius: 500px;
  box-shadow: -50px -50px 100px #272C5A, 
              50px 50px 100px #121530;
  display: flex;
  height: 410px;
  justify-content: center;
  position: relative;
  width: 410px;

  &::before {
    background-color: ${({ theme }) => theme.colors['mirage']};
    border-radius: 500px;
    content: "";
    display: block;
    position: absolute;
    height: 366px;
    width: 366px;
  }
`

export const TimerScreen = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors['white_lilac']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 340px;
  width: 340px;
  position: relative;
  z-index: 5;
`

export const TimerProgress = styled.div`
  border: 12px solid ${({ theme }) => theme.colors[theme.colorChoice]};
  border-radius: 500px;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
`

export const TimerRemaining = styled.h1`
  ${H1};
  margin-bottom: 20px;
`

export const TimerControl = styled.h3`
  ${H3};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors[theme.colorChoice]};
  }
`