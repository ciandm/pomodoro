import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './PomodoroContainer.styled';

function PomodoroContainer({ children }) {
  return (
    <Styled.PomodoroContainer>
      <h2>pomodoro</h2>
      {children}
    </Styled.PomodoroContainer>
  )
}

PomodoroContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PomodoroContainer
