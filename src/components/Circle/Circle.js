import React from 'react'
import styled from 'styled-components';

const StyledCircle = styled.circle`
  stroke-dashoffset: ${({ dashOffset }) => dashOffset};
  transform: ${({ rotation }) => `rotate(${rotation})`};
  transform-origin: center;
`

function Circle({
  rotation,
  dashOffset
}) {
  return (
    <StyledCircle
      rotation={rotation}
      dashOffset={dashOffset}
      cx="50%"
      cy="50%"
      r="160"
    />
  )
}

export default Circle
