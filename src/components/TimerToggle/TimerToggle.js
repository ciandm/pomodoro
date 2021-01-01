import React from 'react'
import * as Styled from './TimerToggle.styled';

function TimerToggle({
  selectedTimer,
  handleTimerSelect
}) {
  return (
    <Styled.Container>
      <Styled.Toggle
        onClick={() => handleTimerSelect('pomodoro')}
        active={selectedTimer === 'pomodoro' ? true : false}
      >Pomodoro</Styled.Toggle>
      <Styled.Toggle
        onClick={() => handleTimerSelect('shortBreak')}
        active={selectedTimer === 'shortBreak' ? true : false}
      >Short Break</Styled.Toggle>
      <Styled.Toggle
        onClick={() => handleTimerSelect('longBreak')}
        active={selectedTimer === 'longBreak' ? true : false}
      >Long Break</Styled.Toggle>
    </Styled.Container>
  )
}

export default TimerToggle
