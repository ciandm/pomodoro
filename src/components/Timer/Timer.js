import React from 'react'
import * as Styled from './Timer.styled';

function Timer() {
  return (
    <Styled.TimerContainer>
      <Styled.TimerScreen>
        <Styled.TimerProgress />
        <Styled.TimerRemaining>17:53</Styled.TimerRemaining>
        <Styled.TimerControl>Pause</Styled.TimerControl>
      </Styled.TimerScreen>
    </Styled.TimerContainer>
  )
}

export default Timer
