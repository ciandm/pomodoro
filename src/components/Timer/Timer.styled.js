import styled, { keyframes, css } from 'styled-components';
import breakpoints from '../../theme/breakpoints';
import {
  H1,
  H3
} from '../../theme/typography';

const strokeFlash = keyframes`
  0% {
    stroke-opacity: .05
  }
  
  50% {
    stroke-opacity: 1;
  }

  100% {
    stroke-opacity: .05
  }
`

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

  @media screen and (max-width: ${breakpoints.sm}) {
    height: 300px;
    width: 300px;

    &::before {
      height: 268px;
      width: 268px;
    }
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

  @media screen and (max-width: ${breakpoints.sm}) {
    height: 248px;
    width: 248px;
  }
`

export const TimerProgress = styled.div`
  /* border: 12px solid ${({ theme }) => theme.colors[theme.userColorChoice]}; */
  border-radius: 500px;
  height: 100%;
  position: absolute;
  width: 100%;
  transform: rotate(270deg);
  z-index: -1;


  & svg {
    border-radius: 500px;
    fill-opacity: 0;
    position: relative;
    stroke: ${({ theme }) => theme.colors[theme.userColorChoice]};
    stroke-width: 12px;
    stroke-dasharray: 1005;
    stroke-linecap: round;

    & .circle--behind {
      stroke-opacity: .05;
      stroke-dashoffset: 0;
      z-index: 1;
    }

    &.isFinished .circle--behind {
      animation-name: ${strokeFlash};
      animation-duration: 2s;
      animation-fill-mode: backwards;
      animation-iteration-count: 2;
      animation-timing-function: linear;
    }
  }

  ${({ timerStatus }) => {
    if (timerStatus.progress === 'finished') {
      return css`
        & svg .circle--behind {
          animation-name: ${strokeFlash};
          animation-duration: 2s;
          animation-fill-mode: backwards;
          animation-iteration-count: 2;
          animation-timing-function: linear;
        }
      `
    }
  }}
`

export const TimerRemaining = styled.h1`
  ${H1};
`

export const TimerControl = styled.h3`
  ${H3};
  cursor: pointer;
  margin-top: 12px;

  &:hover {
    color: ${({ theme }) => theme.colors[theme.userColorChoice]};
  }
`

