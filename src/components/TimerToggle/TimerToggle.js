import React from 'react'
import * as Styled from './TimerToggle.styled';
import { ThemeConsumer } from 'styled-components'

function TimerToggle() {
  return (
    <Styled.Container>
      <Styled.Toggle active>pomodoro</Styled.Toggle>
      <Styled.Toggle>short break</Styled.Toggle>
      <Styled.Toggle>long break</Styled.Toggle>
    </Styled.Container>
  )
}

export default TimerToggle
