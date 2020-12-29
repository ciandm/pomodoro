import React from 'react'
import * as Styled from './PomodoroContainer.styled';

function PomodoroContainer({ children }) {
  return (
    <Styled.PomodoroContainer>
      <h2>pomodoro</h2>
      {children}
    </Styled.PomodoroContainer>
  )
}

export default PomodoroContainer
