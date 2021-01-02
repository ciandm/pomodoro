import styled, { keyframes, css } from 'styled-components';
import {
  H1,
  H3
} from '../../theme/typography';

const stroke = keyframes`
  to {
    stroke-dashoffset: 1005
  }
`

const strokeFlash = keyframes`
  0% {
    opacity: 1
  }
  
  50% {
    opacity: .3;
  }

  100% {
    opacity: 1
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
  /* border: 12px solid ${({ theme }) => theme.colors[theme.userColorChoice]}; */
  border-radius: 500px;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;

  & svg {
    border-radius: 500px;
    fill-opacity: 0;
    position: relative;
    stroke: ${({ theme }) => theme.colors[theme.userColorChoice]};
    stroke-width: 12px;
    stroke-dasharray: 1005;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    transform: rotate(270deg);

    &.countdownAnimation .circle {
    ${({ animationTime }) => {
    return css`
        animation: ${stroke} ${animationTime} linear backwards;
        `
  }}
    }

    &.isAnimating .circle {
      animation-play-state: running;
    }

    &.isPaused .circle {
      animation-play-state: paused;
    }

    & .circle {
      z-index: 2;
    }

    & .circle--behind {
      stroke-opacity: .05;
      z-index: 1;
    }
  }
`

export const TimerRemaining = styled.h1`
  ${H1};
  margin-bottom: 20px;
`

export const TimerControl = styled.h3`
  ${H3};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors[theme.userColorChoice]};
  }
`

