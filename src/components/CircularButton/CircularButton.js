import React from 'react'
import { Button } from './CircularButton.styled';

function CircularButton({
  children,
  ...restProps
}) {
  return (
    <Button
      {...restProps}
    >
      {children}
    </Button>
  )
}

export default CircularButton
