import React from 'react'
import { Button } from './CircularButton.styled';

function CircularButton({
  children,
  label,
  handleFontAndColorSelection,
  type,
  ...restProps
}) {
  return (
    <Button
      onClick={() => handleFontAndColorSelection(type, label)}
      {...restProps}
    >
      {children}
    </Button>
  )
}

export default CircularButton
